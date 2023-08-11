import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const url = 'https://us1.unwiredlabs.com/v2/process.php';
  const params = {
    token: 'pk.2a41fd7cf6666c5c49ffdfd6fe8dbe4c',
    mcc: '404',
    mnc: '22',
    lac: '60679',
    cid: '10121',
  };

  try {
    const response = await axios.get(url, { params });
    const { lat, lon } = response.data;

    res.status(200).json({ lat, lon });
    console.log(lat, lon)
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error)
  }
}
