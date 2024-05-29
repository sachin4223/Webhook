const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.json());

app.post('/webhook', (req, res) => {

    const payload = req.body;

    // Log the received payload
    console.log('Webhook received:', JSON.stringify(payload, null, 2));

    // Process the webhook payload
    processWebhookPayload(payload);

    res.status(200).send('OK');
});

function processWebhookPayload(payload) {
    console.log('Order ID:', payload.order_id);
    console.log('Current Status:', payload.current_status);
    console.log('AWB:', payload.awb);

    // Additional processing logic (e.g., save to database, trigger other actions)
    // Example: Save payload to a database
    // db.save(payload).then(() => console.log('Data saved')).catch(err => console.error('Error saving data', err));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
