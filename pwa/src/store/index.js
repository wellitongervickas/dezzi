import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

import PropTypes from 'prop-types';

import { getStorage } from 'helpers/session/storage';

import auth from 'store/modules/auth';
import contacts from 'store/modules/billings';
import billings from 'store/modules/contacts';

const states = {
  auth,
  contacts,
  billings,
};

const StoreContext = createContext({
  storeDispatch: () => {},
  states,
});

const StoreContextProvider = ({ children }) => {
  const [moduleState, dispatch] = useState({ ...states });

  const storeDispatch = useCallback((store, action, value) => {
    dispatch((s) => {
      try {
        // eslint-disable-next-line no-param-reassign
        s[store][action] = value;
      } catch (error) { /** */ }

      return { ...s };
    });
  }, [dispatch]);

  const authenticated = getStorage('auth');

  useMemo(() => {
    if (!states.auth.READ.token && authenticated) {
      storeDispatch('auth', 'READ', authenticated);
    }
  }, [storeDispatch, authenticated]);

  return (
    <StoreContext.Provider
      value={{
        storeDispatch,
        states: {
          ...moduleState,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  StoreContextProvider,
};

export default StoreContext;
