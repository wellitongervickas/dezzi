import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import View from 'components/Page/View';

import Dashboard from 'components/Dashboard';

import {
  ContactsContainer,
  ContactsTitle,
} from 'views/contacts/styles';

const ContactsForm = () => {
  const { path } = useRouteMatch();
  const label = path.match('new') ? 'New Contact' : 'Edit';

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label={label} />
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default ContactsForm;
