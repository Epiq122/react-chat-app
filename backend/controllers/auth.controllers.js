import User from '../models/user.model.js';
import bcrtpt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

export const login = (req, res) => {
  console.log('Login user');
};

export const logout = (req, res) => {
  console.log('Logout user');
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
