const Annonce = require("../models");

const createAnnonce = (request, response, next) => {
  const body = request.body;

  Annonce.create(body)
    .then((annonce) => {
      response.send(annonce);
    })
    .catch(next);
};

const getAll = (request, response, next) => {
  Annonce.find()
    .then((annonces) => response.send(annonces))
    .catch(next);
};

const getAnnonceByID = (request, response, next) => {
  const id = request.params.id;

  Annonce.findById(id)
    .then((annonce) => {
      response.send(annonce);
    })
    .catch(next);
};

const deleteAnnonceByID = (request, response, next) => {
  const id = request.params.id;

  Annonce.findByIdAndDelete(id)
    .then((annonce) => {
      response.send(annonce);
    })
    .catch(next);
};

const updateAnnonceByID = async (req, res) => {
  const modif = await Annonce.updateOne({ _id: req.params.id }, req.body);

  if (modif.ok) {
    const annonce = await Annonce.findById(req.params.id);
    res.send(annonce);

    return;
  }

  res.send("ERROR");
};

module.exports = {
  createAnnonce,
  getAll,
  getAnnonceByID,
  deleteAnnonceByID,
  updateAnnonceByID,
};
