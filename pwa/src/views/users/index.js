import React from 'react';
import { useHistory } from 'react-router-dom';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import View from 'components/Page/View';
import FormButton from 'components/Form/Button';
import Dashboard from 'components/Dashboard';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

const Users = () => {
  const { push } = useHistory();
  const handleEdit = () => push('/users/edit');

  return (
    <View>
      <Dashboard>
        <UsersContainer>
          <UsersTitle label="Profile">
            <FormButton
              icon={faPen}
              size="sm"
              label="Edit"
              onClick={handleEdit}
            />
          </UsersTitle>
        </UsersContainer>
      </Dashboard>
    </View>
  );
};

export default Users;
