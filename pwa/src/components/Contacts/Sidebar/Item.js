import React from 'react';

import {
  defaultPropTypes,
  setNavLink,
} from 'components/Contacts/helpers';

import { namelize } from 'helpers/text/namelize';

import {
  ContactsSidebarItemContainer,
  ContactsSidebarItemName,
  ContactsSidebarItemPhone,
} from 'components/Contacts/Sidebar/styles';
import { phonelize } from 'helpers/text/phonelize';

const ContactsSidebarItem = ({ contact }) => (
  <ContactsSidebarItemContainer to={setNavLink(contact.uuid)}>
    <ContactsSidebarItemName>
      {namelize(contact.first_name, contact.last_name)}
    </ContactsSidebarItemName>
    <ContactsSidebarItemPhone>
      {phonelize(contact.phone)}
    </ContactsSidebarItemPhone>
  </ContactsSidebarItemContainer>
);

ContactsSidebarItem.propTypes = {
  ...defaultPropTypes.contacts,
};

export default ContactsSidebarItem;
