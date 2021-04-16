const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch("http://localhost:3000/", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      res.render("home", { annonces: json });
    })
    .catch((err) => {
      throw err;
    });
});

const getAnnonceByID = id => {
  return fetch(`http://localhost:3000/get/${id}`, {
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(response => response.json())
      .then(annonce => {
          return annonce
      })
      .catch(err => {
          throw err
      })
}

app.get('/show/:id', async (req, res) => {
  const annonce = await getAnnonceByID(req.params.id)
  res.render('showAnnonce', {annonce: annonce})
})

app.get('/update/:id', async (req, res) => {
  const annonce = await getAnnonceByID(req.params.id)
  res.render('updateAnnonce', { annonce: annonce })
})

app.get("/add", (req, res) => {
  res.render("addAnnonce");
});

app.listen(4000, () => {
  console.log("FRONT IS WORKING ON 4000");
});
