const uuid = require('uuid').v1;

const Contact = {
  create: (contact = {}) => ({
    first_name: contact.first_name,
    last_name: contact.last_name,
    email: contact.email,
    phone: contact.phone,
    uuid: contact.uuid || uuid(),
  }),
};

module.exports = Contact;
