const nodemailer = require('nodemailer');

// Replace with your SMTP server address and port (likely localhost and 25)
const smtpServer = 'localhost';
const smtpPort = 25; // Adjust based on your local server port

// Create a test transporter
const transporter = nodemailer.createTransport({
  host: smtpServer,
  port: smtpPort,
  tls: {
    rejectUnauthorized: false // Disable certificate verification (not recommended for production)
  }
});

const mailOptions = {
  from: 'test@example.com',
  to: 'dev-email@wpengine.local',
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from a local Node.js SMTP server.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending test email:', error);
  } else {
    console.log('Test email sent:', info.response);
  }
});
