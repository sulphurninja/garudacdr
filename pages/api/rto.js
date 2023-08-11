export default async function handler(req, res) {
  const { vid } = req.query; // Retrieve the IMEI number from the request body

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Referer: 'docs.apiclub.in',
      'content-type': 'application/json',
      'API-KEY': 'e8c147a361bc3d5264495fff82fd5e13'
    },
    body: JSON.stringify({ vehicleId: vid }) // Plug in the IMEI number from the request body
  };

  try {
    const response = await fetch('https://api.apiclub.in/api/v1/rc_info', options);
    const data = await response.json();
    console.log(data); // Log the response data to the console

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
