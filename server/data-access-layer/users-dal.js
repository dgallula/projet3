import connection from "../common/database.js";
import CryptoJS from "crypto-js";

let result = {
  success: false,
  data: null,
};

const getAll = async () => {
  try {
    let resultFromDB = await connection.promise().query("SELECT * FROM users");
    result.success = true;
    result.data = resultFromDB[0];
  } catch (error) {
    result.data = error;
  }
  return result;
};

const getUserByEmail = async (userEmail) => {
  try {
    let resultUser = await connection.promise().query(`SELECT * FROM users 
                    WHERE username = "${userEmail}"`);
    result.success = true;
    result.data = resultUser[0];
  } catch (error) {
    result.success = false;
    result.data = error;
  }
  return result;
};

const getAdmin = async () => {
  try {
    let resultUser = await connection.promise().query(`SELECT * FROM users where role= 'admin';
    `);
    result.success = true;
    result.data = resultUser[0];
  } catch (error) {
    result.success = false;
    result.data = error;
  }
  return result;
};


const addNewUser = async (newUser) => {
  try {
    const cryptoPassword = CryptoJS.AES.encrypt(
      newUser.password,
      "secret key 123456"
    ).toString();

    let resultPostToDB = await connection.promise()
      .query(`INSERT INTO users (name, familyName, username, password, role)
        VALUES
         ('${newUser.name}','${newUser.familyName}','${newUser.userName}','${cryptoPassword}','user')`);
    result.success = true;
    result.data = resultPostToDB[0];
  } catch (error) {
    result.success = false;
    result.data = error;
  }
  return result;
};

const update = async (id, user) => {
  try {
    const updateUserResult = await connection.promise().query(
      `UPDATE users SET name=?, familyName=?, userName=?
      WHERE id = ${id}`,
      [user.name, user.familyName, user.userName]
    );
    result.success = true;
    result.data = updateUserResult[0];
  } catch (error) {
    result.data = error;
  }
  return result;
};

export default {
  getAdmin,
  getAll,
  addNewUser,
  getUserByEmail,
  update,
};
