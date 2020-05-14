import React from 'react';
import ContactsSidebarList from 'components/Contacts/Sidebar/List';
import { defaultPropTypes } from 'components/Contacts/helpers';

const ContactsSidebar = ({ contacts = [] }) => (
  <ContactsSidebarList contacts={contacts} />
);

ContactsSidebar.propTypes = {
  ...defaultPropTypes,
};

export default ContactsSidebar;
