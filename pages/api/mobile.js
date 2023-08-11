import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { phone } = req.query;

    const options = {
      method: 'GET',
      url: 'https://truecaller4.p.rapidapi.com/api/v1/getDetails',
      params: {
        phone: phone,
        countryCode: 'IN'
      },
      headers: {
        'X-RapidAPI-Key': '6f4bf869d4mshf22e1f218682572p13d75cjsn07dd1c042c20',
        'X-RapidAPI-Host': 'truecaller4.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const data = response.data;
    console.log(data); // Log the response data to the console

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
