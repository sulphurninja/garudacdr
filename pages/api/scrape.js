import axios from 'axios';
import cheerio from 'cheerio';
import socialMediaData from '../../data.json';

export default async function handler(req, res) {
  try {
    // Perform scraping and populate additional data
    for (const data of socialMediaData) {
      const response = await axios.get(data.url);
      const $ = cheerio.load(response.data);

      // Extract additional metadata using cheerio
      // Example: const followerCount = $('.follower-count').text();
      // Add the extracted data to the respective `data` object
      // Example: data.followerCount = followerCount;
    }

    res.status(200).json({ socialMediaData });
    console.log('socialMediaData:', socialMediaData);
  } catch (error) {
    console.error('Error in API endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
