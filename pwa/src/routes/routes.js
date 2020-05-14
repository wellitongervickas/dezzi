import Login from 'views/login';
import Contacts from 'views/contacts';
import Billings from 'views/billings';
import Users from 'views/users';

export default [{
  name: 'login',
  path: '/login',
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
  name: 'billings',
  path: '/billings',
  component: Billings,
}, {
  name: 'users',
  path: '/users',
  component: Users,
}];
