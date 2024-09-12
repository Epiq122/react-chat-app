import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: 'You need to be logged in' });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return res.status(401).json({ error: 'You need to be logged in' });
    }
    const user = await User.findById(verified.id).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log('Error in protectedRoute middleware', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export default protectedRoute;
