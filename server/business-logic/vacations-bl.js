import vacationsDal from "../data-access-layer/vacations-dal.js";

const getAll = () => {
  return vacationsDal.getAll();
};

const getBy = (id) => {
  return vacationsDal.getVacationById(id);
};

const getFollowers = () => {
  return vacationsDal.getAllFollowers();
};

const getAllVacationsFollowers = () => {
  return vacationsDal.getAllVacationsFollowers();
};

const getAllVacationsFollowersById=(id)=>{
   return vacationsDal.getAllVacationsFollowersById();
}

const addVacation = (newVacationBody) => {
  return vacationsDal.addVacation(newVacationBody);
};

const updateVacation = (id, vacation) => {
  return vacationsDal.update(id, vacation);
};

const addNewFollower = (userId, vacationId) => {
  return vacationsDal.addNewFollowerToDB(userId, vacationId);
};

const deleteVacation = (id) => {
  return vacationsDal.deleteVacation(id);
};

export default {
  getAll,
  getBy,
  addVacation,
  getAllVacationsFollowers,
  getAllVacationsFollowersById,
  deleteVacation,
  getFollowers,
  addNewFollower,
  updateVacation,
};
