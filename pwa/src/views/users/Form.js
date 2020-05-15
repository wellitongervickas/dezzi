import React from 'react';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

const UsersForm = () => (
  <View>
    <Dashboard>
      <UsersContainer>
        <UsersTitle label="Edit Profile" />
      </UsersContainer>
    </Dashboard>
  </View>
);


export default UsersForm;
