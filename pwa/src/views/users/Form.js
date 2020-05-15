import React, {
  useState,
  useEffect,
} from 'react';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import Form from 'components/Form';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

import fields from 'views/users/Form/fields';

const UsersForm = () => {
  const [formFields, setFormFields] = useState([...fields()]);

  useEffect(() => {
    setTimeout(() => {
      const newFieldStatus = [...formFields];
      const field = newFieldStatus.find((item) => item.id === 'email');
      if (field) {
        field.value = 'welliton@gervickas.com.br';
      }

      setFormFields(newFieldStatus);
    }, 3000);
  });

  return (
    <View>
      <Dashboard>
        <UsersContainer>
          <UsersTitle label="Edit Profile" />
          <Form
            fields={formFields}
            onSubmit={(e) => console.log(e)}
          />
        </UsersContainer>
      </Dashboard>
    </View>
  );
};


export default UsersForm;
