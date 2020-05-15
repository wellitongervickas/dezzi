import React, {
  useState,
} from 'react';

import { useHistory } from 'react-router-dom';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import View from 'components/Page/View';
import FormButton from 'components/Form/Button';
import Dashboard from 'components/Dashboard';
import Sections from 'components/Sections';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

import readSections from 'views/users/Read/sections';

const Users = () => {
  const [sections] = useState([...readSections()]);

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
          <Sections sections={sections} />
        </UsersContainer>
      </Dashboard>
    </View>
  );
};

export default Users;
