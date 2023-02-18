const axios = require("axios");

const getTypeData = async () => {
  try {
    const allTypes = (
      await axios("https://pokeapi.co/api/v2/type")
    ).data.results.map((type) => {
      return { name: type.name };
    });
    return allTypes;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = getTypeData;
