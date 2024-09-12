import User from '../models/user.model.js';

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
    // https://avatar.iran.liara.run/public/job/operator/male
    const maleProfilePic = `https://avatar.iran.liara.run/public/job/operator?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/job/lawyer/female?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === 'male' ? maleProfilePic : femaleProfilePic,
    });

    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log('Error in signup controller', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
