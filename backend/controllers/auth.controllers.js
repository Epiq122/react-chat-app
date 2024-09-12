import User from '../models/user.model.js';
import bcrtpt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrtpt.compare(password, user?.password || '');

    if (!user || !validPassword) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log('Error in login controller', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.log('Error in logout controller', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // HASH PW here
    const salt = await bcrtpt.genSalt(10);
    const hashedPassword = await bcrtpt.hash(password, salt);

    // https://avatar.iran.liara.run/public/job/operator/male
    const maleProfilePic = `https://avatar.iran.liara.run/public/job/operator?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/job/lawyer/female?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? maleProfilePic : femaleProfilePic,
    });
    if (newUser) {
      // Generate JWT token
      generateToken(newUser._id, res);

      await await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.log('Error in signup controller', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
