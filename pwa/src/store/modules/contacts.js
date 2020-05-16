import client from 'api/client';
import stateGenerator from 'helpers/modules/state';

export const state = stateGenerator();

const prefix = 'contacts';

export const actions = {
  get: () => client.get(`/${prefix}`),

  update: (uuid, params) => client.put(`/${prefix}/${uuid}`, {
    ...params,
  }),

  create: (params) => client.post(`/${prefix}`, {
    ...params,
  }),
};


export default state;
