import usersDal from "../data-access-layer/users-dal.js";


const getAll = () => {
  return usersDal.getAll();
};

const getUser = async (userName, password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  let result = await usersDal.getUser(userName);

  if (result.data.length > 0) {
      let check = bcrypt.compareSync(password, result.data[0].password);
      if (check) {
          return result
      }
      else {
          result.success = false;
          result.data = "Wrong password";
          return result
      }
  }
  else {
      result.success = false;
      result.data = "User not found";
  }
  return result
}


const addUser = async (body) => {
  let password = body.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return await usersDal.addUser(  body.firstName, body.familyName, body.email, body.userName, hash)
}


// const getUserBy = (email) => {
//   return usersDal.getUserByEmail(email);
// };

// const getAdmin = () => {
//   return usersDal.getAdmin();
// };


// const getByUsers = () => {
//   return usersDal.getByUsers();
// };




// const addUser = (newUser) => {
//   return usersDal.addNewUser(newUser);
// };

// const updateUser = (id, user) => {
//   return usersDal.update(id, user);
// };

export {
  getAll,
  getUser,
  addUser,
  // deleteUser,
  // updateUser
}