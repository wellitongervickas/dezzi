import React, {
  useState,
  useMemo,
  useContext,
  useCallback,
} from 'react';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import Form from 'components/Form';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

import fields from 'views/users/Form/fields';
import { actions } from 'store/modules/auth';
import context from '../../store';

const prefix = 'auth';

const UsersForm = () => {
  const { states, storeDispatch } = useContext(context);
  const [formFields, setFormFields] = useState([...fields()]);
  const [formErrors, setFormErrors] = useState([]);

  const loading = useMemo(() => states.auth.READ_LOADING, [states.auth.READ_LOADING]);

  useMemo(() => {
    const { user } = states.auth.READ;

    setFormFields((s) => {
      s.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.value = user[item.id];
      });

      return s;
    });
  }, [states.auth.READ]);

  const onSubmitSuccess = useCallback((response) => {
    storeDispatch(prefix, 'READ_LOADING', false);
    storeDispatch(prefix, 'READ', response);
  }, [storeDispatch]);

  const onSubmitFailure = useCallback((errors) => {
    storeDispatch(prefix, 'READ_LOADING', false);
    setFormErrors(errors);
  }, [storeDispatch, setFormErrors]);

  const handleSubmit = useCallback((data) => {
    storeDispatch(prefix, 'READ_LOADING', true);

    actions.update(data)
      .then(onSubmitSuccess)
      .catch(onSubmitFailure);
  }, [onSubmitSuccess, onSubmitFailure, storeDispatch]);

  return (
    <View>
      <Dashboard>
        <UsersContainer>
          <UsersTitle label="Edit Profile" />
          <Form
            fields={formFields}
            onSubmit={handleSubmit}
            loading={loading}
            formErrors={formErrors}
          />
        </UsersContainer>
      </Dashboard>
    </View>
  );
};


export default UsersForm;
