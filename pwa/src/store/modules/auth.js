import client from 'api/client';
import stateGenerator from 'helpers/modules/state';

export const state = stateGenerator();

export const actions = {
  create: (params) => client.post('/users', {
    ...params,
  }).then((r) => r.data),
  auth: (params) => client.post('/users/auth', {
    ...params,
  }).then((r) => r.data),
};

export default state;
