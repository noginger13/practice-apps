require("dotenv").config();
const express = require("express");
const path = require("path");

const db = require("./db");


const app = express();

app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


//ROUTES

//Initial/Fetch All

app.get('/init', (req, res) => {
  db.getAll()
  .then((glossary) => {
    res.status(200);
    res.send(JSON.stringify(glossary));
  })
  .catch((err) => {
    res.sendStatus(500);
    console.error(err);
  })
});

//Add

app.post('/add', (req, res) => {
  db.add(req.body)
  .then(() => {
    console.log(`${req.body.word} was added!`);
    res.sendStatus(201);
  })
  .catch((err) => {
    console.error('Failed to add to database.');
    res.sendStatus(500);
  })
});

//Delete

app.post('/del', (req, res) => {
  db.remove(req.body._id)
  .then(() => {
    console.log(`${req.body._id} was deleted!`);
    res.sendStatus(202);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  })
})

//Search

//Edit





app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
