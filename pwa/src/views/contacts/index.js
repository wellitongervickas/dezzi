import React from 'react';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import ContactsList from 'components/Contacts/List';
import FormButton from 'components/Form/Button';

import {
  ContactsContainer,
  ContactsTitle,
} from 'views/contacts/styles';

const mockList = [];

const Contacts = () => {
  const { push } = useHistory();
  const handleNew = () => push('contacts/new');

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label="Contacts">
            <FormButton
              icon={faPlus}
              size="sm"
              label="New"
              onClick={handleNew}
            />
          </ContactsTitle>
          <ContactsList contacts={mockList} />
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default Contacts;
