import React from 'react';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { defaultPropTypes } from 'components/Contacts/helpers';

import {
  ContactsSidebarEmpty,
} from 'components/Contacts/Sidebar/styles';

import ContactsSidebarItem from 'components/Contacts/Sidebar/Item';
import FormButton from 'components/Form/Button';

const ContactsSidebarList = ({ contacts = [] }) => {
  const { push } = useHistory();

  if (contacts.length) {
    return contacts.map((contact) => <ContactsSidebarItem key={contact.uuid} contact={contact} />);
  }

  const handleNewContact = () => push('/contacts/new');

  return (
    <ContactsSidebarEmpty>
      <p>
        No Contacts Yet!
      </p>
      <FormButton
        onClick={handleNewContact}
        icon={faPlus}
        label="First Contact"
        size="xs"
      />
    </ContactsSidebarEmpty>
  );
};

ContactsSidebarList.propTypes = {
  ...defaultPropTypes,
};

export default ContactsSidebarList;
