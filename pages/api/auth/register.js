import connectDb from '../../../utils/db';
import User from '../../../models/User';
import { hash } from 'bcryptjs';

connectDb();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, name, email, password } = req.body;

  try {
    // Check if the username or email is already registered
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await hash(password, 10);

    // Create a new user with the provided registration data
    const newUser = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      return res.status(200).json({ message: 'Registration successful' });
    } else {
      return res.status(500).json({ error: 'Registration failed' });
    }
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Registration failed' });
  }
}
