const axios = require('axios');

const shortenURL = async (req, res) => {
  const { url } = req.body;

  const encodedParams = new URLSearchParams();
  encodedParams.set('url', url);

  const options = {
    method: 'POST',
    url: 'https://url-shortener-service.p.rapidapi.com/shorten',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '2a5693d34cmsh4d9d8123750aa5fp1c224fjsnc509101cb29e',
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while shortening the URL.' });
  }
};

module.exports = shortenURL;
