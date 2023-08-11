import { IgApiClient } from 'instagram-private-api';

const ig = new IgApiClient();

export default async (req, res) => {
  try {
    const { username, password } = req.query;

    ig.state.generateDevice(username);
    // Optionally, set up a proxy URL if needed
    // ig.state.proxyUrl = '<your_proxy_url>';

    await ig.simulate.preLoginFlow();
    const loggedInUser = await ig.account.login(username, password);
    await ig.simulate.postLoginFlow();

    const user = await ig.user.searchExact(username);

    res.status(200).json(user);

  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
