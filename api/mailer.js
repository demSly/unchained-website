const nodemailer = require('nodemailer');

const logger = console;

const {
  MAIL_URL,
} = process.env;

const transporter = nodemailer.createTransport(MAIL_URL);
transporter.options.connectionTimeout = 5;
logger.log('verifying SMTP connection...');
transporter.verify()
  .then(() => {
    logger.log('Server is ready to take our messages');
  })
  .catch((error) => {
    logger.error('SMTP error', error);
  });


module.exports = transporter;
