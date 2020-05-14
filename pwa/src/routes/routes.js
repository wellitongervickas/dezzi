import Login from 'views/login';

import Contacts from 'views/contacts';
import ContactsForm from 'views/contacts/Form';
import ContactsRead from 'views/contacts/Read';

import Users from 'views/users';

export default [{
  name: 'login',
  path: '/auth',
  component: Login,
}, {
  name: 'auth-login',
  path: '/auth/login',
  component: Login,
}, {
  name: 'auth-register',
  path: '/auth/register',
  component: Login,
}, {
  name: 'contacts',
  path: '/',
  component: Contacts,
}, {
  name: 'contacts',
  path: '/contacts',
  component: Contacts,
}, {
  name: 'contacts-new',
  path: '/contacts/new',
  component: ContactsForm,
}, {
  name: 'contacts-read',
  path: '/contacts/:uuid',
  component: ContactsRead,
}, {
  name: 'contacts-edit',
  path: '/contacts/:uuid/edit',
  component: ContactsForm,
}, {
  name: 'users',
  path: '/users',
  component: Users,
}];
