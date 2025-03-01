const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

app.post('/send-inquiry', (req, res) => {
    const { name, email, phone, message } = req.body;
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: 'New Inquiry from Cloud Infomac',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Inquiry sent successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});