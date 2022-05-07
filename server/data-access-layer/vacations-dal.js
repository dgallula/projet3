import connection from "../common/database.js";

let vacationsResult = {
  success: false,
  data: null,
};

// get vacations without followers

const getAll = async () => {
  try {
    let getAllResult = await connection
      .promise()
      .query("SELECT * FROM vacations");
    vacationsResult.success = true;
    vacationsResult.data = getAllResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

// get vacations with followers 

const getAllVacationsFollowers = async () => {
  try {
    let getAllResult = await connection
      .promise()
      .query("SELECT vacations.* ,COUNT(follow.vacationId) AS NumberVacations FROM follow  LEFT JOIN vacations ON follow.vacationId = vacations.id GROUP BY vacations.cityName  ORDER BY vacations.id ASC");

    vacationsResult.success = true;
    vacationsResult.data = getAllResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

// get vacations with followers by Id

const getAllVacationsFollowersById = async () => {
  try {
    let getAllResult = await connection
      .promise()
      .query("select vacations.*,Count(follow.vacationId) As numberVacations from Follow  left join vacations on follow.vacationId = vacations.Id  where exists ( select * from follow where vacations.id = follow.vacationId and follow.userId ) group by vacations.cityName");

    vacationsResult.success = true;
    vacationsResult.data = getAllResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;

};

// get vacations without followers bi Id 

const getVacationById = async (vacationId) => {
  try {
    let getVacationResult = await connection
      .promise()
      .query(`SELECT * FROM vacations WHERE id = ${vacationId}`);
    vacationsResult.success = true;
    vacationsResult.data = getVacationResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

const getAllFollowers = async () => {
  try {
    let followersResult = await connection.promise()
      .query(`SELECT `);
    vacationsResult.success = true;
    vacationsResult.data = followersResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

// addVacation

const addVacation = async (newVacation) => {
  try {
    let postResult = await connection.promise()
      .query(`INSERT INTO vacations (destination, description, image, price, startDate, endDate, followers)
        VALUES
         ("${newVacation.destination}", "${newVacation.description}","${newVacation.image}","${newVacation.price}", "${newVacation.startDate}", "${newVacation.endDate}",  "0")`);
    vacationsResult.success = true;
    vacationsResult.data = postResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

const addNewFollowerToDB = async (userId, vacationId) => {
  try {
    let postFollowerResult = await connection.promise()
      .query(`INSERT INTO users_vacations (userId, vacationId)
      VALUES
       ('${userId}', '${vacationId}')`);
    vacationsResult.success = true;
    vacationsResult.data = postFollowerResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

const update = async (id, vacationToUpdate) => {
  try {
    const result = await connection.promise().query(
      `UPDATE vacations SET destination=?, description=?, image=?, price=?, startDate=?, endDate=?
      WHERE id = ${id}`,
      [
        vacationToUpdate.destination,
        vacationToUpdate.description,
        vacationToUpdate.image,
        vacationToUpdate.price,
        vacationToUpdate.startDate,
        vacationToUpdate.endDate,
      ]
    );
    vacationsResult.success = true;
    vacationsResult.data = result[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

const deleteVacation = async (vacationId) => {
  try {
    let deleteResult = await connection
      .promise()
      .query(`DELETE FROM vacations WHERE id = ${vacationId}`);
    vacationsResult.success = true;
    vacationsResult.data = deleteResult[0];
  } catch (error) {
    vacationsResult.data = error;
  }
  return vacationsResult;
};

export default {
  getAll,
  getVacationById,
  getAllVacationsFollowers,
  getAllVacationsFollowersById,
  addVacation,
  deleteVacation,
  getAllFollowers,
  addNewFollowerToDB,
  update,
};
