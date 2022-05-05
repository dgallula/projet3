import usersDal from "../data-access-layer/users-dal.js";

const getAll = () => {
  return usersDal.getAll();
};

const getUserBy = (email) => {
  return usersDal.getUserByEmail(email);
};

const getAdmin = () => {
  return usersDal.getAdmin();
};

const addUser = (newUser) => {
  return usersDal.addNewUser(newUser);
};

const updateUser = (id, user) => {
  return usersDal.update(id, user);
};
export default {
  getAdmin,
  getAll,
  addUser,
  getUserBy,
  updateUser,
};
