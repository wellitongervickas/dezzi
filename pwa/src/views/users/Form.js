import React from 'react';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import Form from 'components/Form';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

import fields from 'views/users/Form/fields';

const UsersForm = () => (
  <View>
    <Dashboard>
      <UsersContainer>
        <UsersTitle label="Edit Profile" />
        <Form fields={[...fields()]} />
      </UsersContainer>
    </Dashboard>
  </View>
);


export default UsersForm;
