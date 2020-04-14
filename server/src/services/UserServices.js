const UserServices = {
  getUsers: (_req, res) => {
    return res.send({ getUsers: true });
  },
};

module.exports = UserServices;
