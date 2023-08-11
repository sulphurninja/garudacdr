import connectDb from '../../../utils/db';
import User from '../../../models/User';
import { compare } from 'bcryptjs';

connectDb();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  try {
    // Find the user in the database based on the provided username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    console.log(user)
    // Compare the provided password with the hashed password stored in the database
    const isPasswordMatch = await compare(password, user.password);

    if (isPasswordMatch) {
      return res.status(201).json({success: true, message: 'Login successful', data: user.name });
     
    } else {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
}
