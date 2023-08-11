// pages/api/profilePicture.js

import md5 from 'md5';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Missing email parameter' });
  }

  const hash = md5(email.trim().toLowerCase());
  const gravatarURL = `https://www.gravatar.com/avatar/${hash}?s=200`; // Change 's' value to specify the size of the image (e.g., 200)

console.log(gravatarURL);  
  res.status(200).json({ profilePictureURL: gravatarURL });
}
