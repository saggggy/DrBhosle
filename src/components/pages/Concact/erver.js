const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 2525;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to send email
app.post('/send-email', async (req, res) => {
    const { name, email, subject, phone, message } = req.body;

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'soulmateinfotech5@gmail.com', // Your SMTP host
        port: 2525, // Your SMTP port
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'soulmateinfotech5@gmail.com', // Your email address
            pass: 'BFD42FBBB08F1FD669AF8B2774583F906E6A' // Your email password or application-specific password
        },
    });

    // Setup email data
    let mailOptions = {
        from: 'smtp.elasticemail.com',
        to: 'soulmateinfotech5@gmail.com', // Receiver's email address
        subject: subject,
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `
    };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email: ' + error.message);
        res.status(500).send('Error sending email');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
