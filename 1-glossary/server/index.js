require("dotenv").config();
const express = require("express");
const path = require("path");

const db = require("./db.js");


const app = express();

app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


//ROUTES

//Initial

app.get('/init', (req, res) => {
   db.add({
    word: 'Add a word to the glossary!',
    definition: 'You can delete this sample with the buttons.'
  })
  .catch((err) => console.error(err))
})



//Search


//Add


//Edit


//Delete



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
