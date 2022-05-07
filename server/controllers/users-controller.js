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




// /// Post new vacation
// router.post('/', async (req, res) => {
//   try {
//       const { descriptions, country, cityName, price, img, dateFrom, dateUntil } = req.body

//       const newVaca = await SQL(`INSERT into vacations(descriptions,country,cityName,price,img,dateFrom,dateUntil)
//       VALUES ("${descriptions}","${country}","${cityName}",${price},"${img}","${dateFrom}","${dateUntil}")`)
//       // console.log(newVaca.insertId);
//       // await SQL(`INSERT into follow(user_id,vacations_id)
//       // VALUES (2,${newVaca.insertId})`)

//       res.send({ msg: "The vacations was post" })

//   } catch (err) {
//       console.log(err);
//       return res.sendStatus(500)
//   }

// })


// // Delete vacation
// router.delete('/:id', async (req, res) => {
//   try {

//       await SQL(`DELETE FROM vacations WHERE id=${req.params.id};`);

//   } catch (err) {
//       console.log(err);
//       return res.sendStatus(500)
//   }

// })

// // Upatde vacation
// router.put('/', async (req, res) => {

//   try {
//       const { descriptions, id, img, cityName, country, dateFrom, dateUntil, price } = req.body


//       if (!descriptions || !img || !cityName || !country || !dateFrom || !dateUntil || !price) {
//           return res.status(400).send({ err: " Everything Is Requird" })
//       }

//       await SQL(`UPDATE vacations
//       SET img = "${img}" , cityName = "${cityName}", country = "${country}" ,  descriptions = "${descriptions}", price = ${price}
//       WHERE id = ${id};`)

//       if (dateFrom) {
//           await SQL(`UPDATE vacations
//           SET  dateFrom = "${dateFrom}"
//           WHERE id = ${id};`)
//       }
//       if (dateUntil) {
//           await SQL(`UPDATE vacations
//           SET  dateUntil = "${dateUntil}"
//           WHERE id = ${id};`)
//       }

//       res.send({ msg: "you've changed the post" })

//   } catch (err) {
//       console.log(err);
//       return res.sendStatus(500)
//   }


// })


// module.exports = router