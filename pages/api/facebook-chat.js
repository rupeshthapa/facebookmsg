// pages/api/facebook-chat.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
    try {
        const response = await fetch('https://www.facebook.com/plugins/customer_chat/SDK/?app_id=339311762467931&other_parameters');
        const data = await response.text();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send('Error fetching data from Facebook');
    }
}
