const { createAnnonce, getAll, getAnnonceByID, deleteAnnonceByID, updateAnnonceByID } = require("../controllers");

const createRoutes = (app) => {

  app.get("/", getAll);

  app.get("/get/:id", getAnnonceByID);

  app.post("/", createAnnonce);

  app.delete("/delete/:id", deleteAnnonceByID);

  app.put("/update/:id", updateAnnonceByID);
};

module.exports = createRoutes;
