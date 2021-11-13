const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '43eecc68830b63',
    pass: '51f41b690d8b62',
  },
});

module.exports = transport;
