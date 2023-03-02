const typeRouter = require("express").Router();
const { Type } = require("../db");
const getTypeData = require("../controllers/getTypeData");
const saveTypeData = require("../controllers/saveTypeData");

typeRouter.get("/", async (req, res) => {
  try {
    // db
    const dbTypes = await Type.findAll();
    if (Object.keys(dbTypes).length) {
      return res.status(200).json(dbTypes);
    }
    // if no db, then api saves to db
    const allTypes = await getTypeData();
    const savedTypes = await saveTypeData(allTypes);
    return res.status(200).json(savedTypes);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = typeRouter;
