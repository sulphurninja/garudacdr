import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { vpa } = req.query;

    
    const options = {
      method: 'POST',
      url: 'https://upi-verification.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_vpa',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '2a5693d34cmsh4d9d8123750aa5fp1c224fjsnc509101cb29e',
        'X-RapidAPI-Host': 'upi-verification.p.rapidapi.com'
      },
      data: {
        task_id: 'UUID',
        group_id: 'UUID',
        data: {vpa: vpa}
      }
    };
    try {
      const response = await axios(options);
      res.status(200).json(response.data);
      console.log(response.data)
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data from the API' });
      console.log(error)
    }
  } else {
    res.status(400).json({ error: 'Invalid request method' });
  }
}




