const axios = require("axios");
const { Type } = require("../db");
const { getTypeData } = require("./getTypeData");

const saveTypeData = async (allTypes) => {
  try {
    await Type.bulkCreate(allTypes);

    return allTypes;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { getTypeData, saveTypeData };
