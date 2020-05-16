import React, {
  useContext,
  useLayoutEffect,
  useCallback,
} from 'react';

import Loading from 'components/Loading';

import ContactsSidebarList from 'components/Contacts/Sidebar/List';
import { actions } from 'store/modules/contacts';

import { white } from 'assets/stylesheets/js/colors';

import context from '../../../store';

const ContactsSidebar = () => {
  const { states, storeDispatch } = useContext(context);

  const onGetSuccess = useCallback((res) => {
    storeDispatch('contacts', 'LIST', res);
    storeDispatch('contacts', 'LOADING', false);
  }, [storeDispatch]);

  const onGetFailure = useCallback(() => {
    storeDispatch('contacts', 'LOADING', false);
  }, [storeDispatch]);

  useLayoutEffect(() => {
    storeDispatch('contacts', 'LIST', []);
    storeDispatch('contacts', 'LOADING', true);

    actions.get()
      .then(onGetSuccess)
      .catch(onGetFailure);
  }, [storeDispatch, onGetSuccess, onGetFailure]);

  return states.contacts.LOADING ? (
    <Loading color={white} />
  ) : (
    <ContactsSidebarList contacts={states.contacts.LIST} />
  );
};

export default ContactsSidebar;
