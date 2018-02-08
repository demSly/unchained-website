const mailer = require('../../mailer');

const {
  MAIL_SENDER,
  MAIL_RECIPIENT,
} = process.env;

const send = async mailOptions =>
  new Promise((resolve, reject) => {
    mailer.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(info);
    });
  });

module.exports = async (root, { request }) => {
  const {
    firstName,
    lastName,
    mobileNumber,
    email,
    comment,
  } = request;
  const result = await send({
    from: `"Unchained Call-Back Bot 👻" <${MAIL_SENDER}>`, // sender address
    to: MAIL_RECIPIENT, // list of receivers
    subject: `Call-Back-Request from ${firstName} ${lastName}`, // Subject line
    text: `
      Email: ${email}\n
      Phone number: ${mobileNumber}\n
      ${comment}
    `, // plain text body
  });
  console.log(result); // eslint-disable-line
  return result.messageId;
};
