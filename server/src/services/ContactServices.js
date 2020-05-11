const { validationResult } = require('express-validator');

const conn = require('../database/conn');
const Contact = require('../models/Contact');

const {
  errorsParse,
} = require('../helpers/api/response');

const {
  USER_UNAUTHORIZED,
  CONTACT_NOT_EXISTS,
} = require('../config/constants/errors');

const ContactServices = {
  /**
   * @name index
   *
   * @returns Contacts
   *
   * @public
   */

  index: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json(errorsParse(errors.array()));
      }

      await conn('contacts')
        .select('*')
        .where({ user_uuid: req.authenticated.uuid })
        .then((contacts) => {
          return res.json(contacts.map(item => Contact.create(item)));
        });

      return res.send();

    } catch (error) {
      return res.status(500).send();
    }
  },

  /**
   * @name getContact
   *
   * @returns Contact
   *
   * @public
   */

  getContact: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json(errorsParse(errors.array()));
      }

      const { uuid } = req.params;

      await ContactServices.findContactByUUID(req, res, uuid)
        .then((contact) => {
          return res.json(Contact.create(contact));
        });
    } catch (error) {
      return res.status(500).send();
    }
  },

  /**
   * @name updateContact
   *
   * @param {string} first_name contact first name
   * @param {string} last_name contact last namel
   * @param {string} email contact email
   * @param {string} phone contact phone
   *
   * @returns Contact
   *
   * @public
   */

  updateContact: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json(errorsParse(errors.array()));
      }

      const { uuid } = req.params;

      await ContactServices.findContactByUUID(req, res, uuid)
        .then(async () => {
          const contact = Contact.create({
            ...req.body,
            uuid,
          });

          await conn('contacts')
            .where({ uuid })
            .update({ ...contact })
            .then(() => {
              return res.json(contact);
            });
        });

    } catch (error) {
      return res.status(500).send();
    }
  },

  /**
   * @name createContact
   *
   * @param {string} first_name contact first name
   * @param {string} last_name contact last namel
   * @param {string} email contact email
   * @param {string} phone contact phone
   *
   * @returns Contact
   *
   * @public
   */

  createContact: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json(errorsParse(errors.array()));
      }

      const ContactModel = Contact.create(req.body);

      await conn('contacts')
        .insert({
          ...ContactModel,
          user_uuid: req.authenticated.uuid,
        })
        .then(() => res.status(201).json(ContactModel));
    } catch (error) {
      return res.status(500).send();
    }
  },

  /**
   * @name deleteContact
   *
   * @param {string} uuid contact uuid
   *
   * @public
   */

  deleteContact: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json(errorsParse(errors.array()));
      }

      const { uuid } = req.params;

      await ContactServices.findContactByUUID(req, res, uuid)
        .then(async () => {
          await conn('contacts').where({ uuid }).delete().then(() => {
            return res.json({ uuid });
          });
        });
    } catch (error) {
      return res.status(500).send();
    }
  },

  /**
   * @name findContactByUUID
   *
   * @param {string} uuid contact uuid
   *
   * @returns Contact
   *
   * @public
   */

  findContactByUUID: async (req, res, uuid) => await conn('contacts')
    .where({ uuid })
    .first()
    .then((contact) => {
      if (!contact || (contact && contact.uuid !== uuid)) {
        return res.status(404).send(errorsParse([{
          msg: CONTACT_NOT_EXISTS,
          param: 'uuid',
          location: 'params',
        }]));
      }

      if (contact.user_uuid !== req.authenticated.uuid) {
        return res.status(401).json(errorsParse([{
          msg: USER_UNAUTHORIZED,
          param: 'headers',
          location: 'authorization',
        }]));
      }

      return contact;
  }),
};

module.exports = ContactServices;
