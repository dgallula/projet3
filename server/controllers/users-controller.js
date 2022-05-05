import express from "express";
import usersBl from "../business-logic/users-bl.js";
import generalSetting from "../common/config.js";
import { checkPassword, checkResultStatus } from "../common/helper.js";
import CryptoJS from "crypto-js";
// import { signUpErrors, signInErrors } from '../utils/errors.utils';

const usersRouter = express.Router();

// get all users

usersRouter.get(`${generalSetting.baseUrl}/users`, async (req, res) => {
  const getResult = await usersBl.getAll();
  if (!checkResultStatus(getResult)) {
    return res.status(500).send(getResult);
  } else {
    return res.send(getResult.data);
  }
});



usersRouter.get(`${generalSetting.baseUrl}/admin`, async (req, res) => {
  const getResult = await usersBl.getAdmin();
  if (!checkResultStatus(getResult)) {
    return res.status(500).send(getResult);
  } else {
    return res.send(getResult.data);
  }
});





usersRouter.get(
  `${generalSetting.baseUrl}/users/login`,
  async (req, res) => {
    const userName = req.params.userName;
    const password = CryptoJS.AES.encrypt(
      req.params.pass,
      "secret key 123456"
    ).toString();

    const getUserResult = await usersBl.getUserBy(userName);
    if (!checkResultStatus(getUserResult)) {
      return res.status(500).send(getUserResult);
    } else {
      if (checkPassword(password, getUserResult.data[0].password)) {
        return res.send(getUserResult.data);
      } else {
        return res.json("Invalid Credentials");
      }
    }
  }
);

// add user 

usersRouter.post(`${generalSetting.baseUrl}/users`, async (req, res) => {
  const body = req.body;
  const postResult = await usersBl.addUser(body);

  if (!checkResultStatus(postResult)) {
    return res.status(500).send(postResult);
  } else {
    postResult.data = {
      id: postResult.data.insertId,
      ...body,
    };
    return res.send(postResult.data);
  }
});

// put users by id 

usersRouter.put(`${generalSetting.baseUrl}/users/:id`, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updateResult = await usersBl.updateUser(id, body);
  if (!checkResultStatus(updateResult)) {
    return res.status(500).send(updateResult);
  } else {
    updateResult.data = {
      id,
      ...body,
    };
    return res.send(updateResult.data);
  }
});

export default usersRouter;
