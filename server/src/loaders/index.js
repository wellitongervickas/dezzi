import expressLoader from './express';

export default async (app) => {
  await expressLoader.init(app);
};
