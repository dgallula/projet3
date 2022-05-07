import express from "express";
import followBl from "../business-logic/follow-bl.js";
import generalSetting from "../common/config.js";
import { checkResultStatus, upload } from "../common/helper.js";

const followRouter = express.Router();

// get All vacations 

followRouter.get(`${generalSetting.baseUrl}/follow`, async (req, res) => {
  const getResult = await followBl.getAll();
  if (!checkResultStatus(getResult)) {
    return res.status(500).send(getResult);
  } else {
    return res.send(getResult.data);
  }
});


followRouter.get(`${generalSetting.baseUrl}/follow-followers`, async (req, res) => {
  const getResult = await followBl.getNumberOfFollowers();
  if (!checkResultStatus(getResult)) {
    return res.status(500).send(getResult);
  } else {
    return res.send(getResult.data);
  }
});



export default followRouter;

