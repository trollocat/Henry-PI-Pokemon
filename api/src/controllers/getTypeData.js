const axios = require("axios");
const { awaitConsoleLog } = require("../utils/helpers");

const getTypeData = async () => {
  try {
    const allTypes = (
      await axios("https://pokeapi.co/api/v2/type")
    ).data.results.map((type) => type.name);
    return allTypes;
  } catch (error) {
    throw Error(error.message);
  }
};

awaitConsoleLog(getTypeData);

module.exports = getTypeData;
