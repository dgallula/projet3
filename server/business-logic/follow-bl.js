 import followDal from "../data-access-layer/follow-dal.js";

const getAll = () => {
  return followDal.getAll();
};

const getNumberOfFollowers = () => {
  return followDal.getNumberOfFollowers();
}

export default {
    getAll,
    getNumberOfFollowers
}