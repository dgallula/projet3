import connection from "../common/database.js";

let followResult = {
  success: false,
  data: null,
};

// get follow

const getAll = async () => {
  try {
    let getAllResult = await connection
      .promise()
      .query("SELECT * FROM follow");
    followResult.success = true;
    followResult.data = getAllResult[0];
  } catch (error) {
    followResult.data = error;
  }
  return followResult;
};

const getNumberOfFollowers = async () => {
    try {
      let getAllResult = await connection
        .promise()
        .query("SELECT followers FROM follow");
     followResult.success = true;
     followResult.data = getAllResult[0];
    } catch (error) {
      followResult.data = error;
    }
    return followResult;
  };
  

export default {
    getAll,
    getNumberOfFollowers
}

