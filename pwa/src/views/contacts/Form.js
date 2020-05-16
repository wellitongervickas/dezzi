import React, {
  useContext,
  useMemo,
  useState,
  useCallback,
} from 'react';

import { useRouteMatch } from 'react-router-dom';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import Form from 'components/Form';
import Alert from 'components/Alert';

import {
  ContactsContainer,
  ContactsTitle,
} from 'views/contacts/styles';

import fields from 'views/contacts/Form/fields';
import { actions } from '../../store/modules/contacts';
import context from '../../store';

const prefix = 'contacts';

const ContactsForm = () => {
  const { path, params } = useRouteMatch();
  const { states, storeDispatch } = useContext(context);

  const [formFields, setFormFields] = useState([...fields()]);
  const [formErrors, setFormErrors] = useState([]);

  const newContact = path.match('new');
  const statePrefix = newContact ? 'CREATE' : 'UPDATE';
  const loadingPrefix = `${statePrefix}_LOADING`;
  const label = newContact ? 'New Contact' : 'Edit';

  const loading = states.contacts[loadingPrefix];
  const showAlert = Object.keys(states.contacts[statePrefix]).length > 0;
  const text = `${newContact ? 'Created' : 'Updated'} successfully`;

  useMemo(() => {
    const list = states.contacts.LIST;
    const { uuid } = params;
    const contact = list.find((i) => i.uuid === uuid);

    if (contact) {
      setFormFields((s) => {
        s.forEach((i) => {
          // eslint-disable-next-line no-param-reassign
          i.value = contact[i.id];
        });

        return s;
      });
    }
  }, [states.contacts.LIST, params]);

  const onSubmitSuccess = useCallback((response) => {
    storeDispatch(prefix, loadingPrefix, false);
    storeDispatch(prefix, statePrefix, response);
  }, [storeDispatch, statePrefix, loadingPrefix]);

  const onSubmitFailure = useCallback((errors) => {
    storeDispatch(prefix, loadingPrefix, false);
    setFormErrors(errors);
  }, [storeDispatch, setFormErrors, loadingPrefix]);

  const handleSubmit = useCallback((data) => {
    storeDispatch(prefix, statePrefix, {});
    storeDispatch(prefix, loadingPrefix, true);

    const action = newContact ? actions.create(data) : actions.update(params.uuid, data);
    action.then(onSubmitSuccess).catch(onSubmitFailure);
  }, [
    onSubmitSuccess,
    onSubmitFailure,
    storeDispatch,
    statePrefix,
    newContact,
    loadingPrefix,
    params.uuid,
  ]);

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label={label} />
          {showAlert && <Alert text={text} color="green" />}
          <Form
            onSubmit={handleSubmit}
            fields={formFields}
            formErrors={formErrors}
            loading={loading}
          />
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default ContactsForm;
