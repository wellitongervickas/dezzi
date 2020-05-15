import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import Form from 'components/Form';

import {
  ContactsContainer,
  ContactsTitle,
} from 'views/contacts/styles';

import fields from 'views/contacts/Form/fields';

const ContactsForm = () => {
  const { path } = useRouteMatch();
  const label = path.match('new') ? 'New Contact' : 'Edit';

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label={label} />
          <Form fields={[...fields()]} />
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default ContactsForm;
