const _ = require("lodash");
const Vaccine_packet = require("../models/vaccine_packet");
const Vaccine = require("../models/vaccine");
const isDuplicate = (obj) => {
  //size of object
  const size = _.size(obj);
  const array = [];
  for (let i = 0; i < size; i++) {
    // isExit = -1 if not found name in object else  return index first in array
    const isExist = _.findIndex(array, { name: obj[i].name });
    if (isExist >= 0) {
      return true;
    }
    array.push(obj[i]);
  }
  return false;
};
const isExistVaccine_packet = async (obj) => {
  //size of object
  const size = _.size(obj);
  let tempTotal = 0;
  for (let i = 0; i < size; i++) {
    // isExit = -1 if not found name in object else  return index first in array
    const isExist = await Vaccine_packet.findOne({ name: obj[i].name });
    if (!isExist) {
      return false;
    }
    tempTotal += isExist.price;
  }
  return tempTotal;
};
const isExistVaccine = async (obj) => {
  //size of object
  const size = _.size(obj);
  let tempTotal = 0;

  for (let i = 0; i < size; i++) {
    // isExit = -1 if not found name in object else  return index first in array
    const isExist = await Vaccine.findOne({ name: obj[i].name });
    if (!isExist) {
      return false;
    }
    tempTotal += isExist.price;
  }
  return tempTotal;
};
module.exports = { isDuplicate, isExistVaccine_packet, isExistVaccine };
