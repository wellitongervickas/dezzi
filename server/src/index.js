const express = require('express');
const loaders = require('./loaders');

const app = express();

async function startServer() {
  await loaders({
    app,
  });

  app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, (err) => {
    if (err) {
      throw(err);
    }

    console.log(`App running on: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
  });
};

startServer();

module.exports = app;
