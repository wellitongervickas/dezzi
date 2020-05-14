import React from 'react';
import { defaultPropTypes } from 'components/Contacts/helpers';
import ContactsSidebarItem from './Item';

const ContactsSidebarList = ({ contacts = [] }) => {
  if (contacts.length) {
    return contacts.map((contact) => <ContactsSidebarItem key={contact.uuid} contact={contact} />);
  }

  return (
    <div>Empty contacts List</div>
  );
};

ContactsSidebarList.propTypes = {
  ...defaultPropTypes,
};

export default ContactsSidebarList;
