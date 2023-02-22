const { Type } = require("../db");

const saveTypeData = async (allTypes) => {
  try {
    const savedTypes = await Type.bulkCreate(allTypes);

    return savedTypes;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = saveTypeData;
