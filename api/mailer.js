const nodemailer = require('nodemailer');

const logger = console;

const {
  MAIL_URL,
} = process.env;

module.exports = () => {
  const transport = nodemailer.createTransport(MAIL_URL);
  transport.options.connectionTimeout = 5;
  logger.log('verifying SMTP connection...');
  transport.verify()
    .then(() => {
      logger.log('Server is ready to take our messages');
    })
    .catch((error) => {
      logger.error('SMTP error', error);
    });
  return transport;
};
