const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/send', async (req, res) => {
    const {name, email, message} = req.body;

    if(!name || !email || !message){
        return res.status(400).json({message: 'All fields are required.'});
    }

    const mailOptions = {
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Message from ${name}`,
        html: `
        <p>You have a new message from your blog's contact form.</p>
        <h3>Details:</h3>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: 'Message sent carefully!'});
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({message: 'Failed to send message.'});
    }
});

module.exports = router;