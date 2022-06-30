require("dotenv").config();
const mongoose = require("mongoose");

//Establish a connection to MongoDB
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
.then(() => {
  console.log(`MongoDB connected to DB ${process.env.DB_NAME}`);
})
.catch((err) => {
  console.error(`MongoDB was unable to conect to DB ${process.env.DB_NAME}`);
});

//Set up schema
const wordsSchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Words = mongoose.model(`${process.env.DB_NAME}`, wordsSchema);

//Set up models

//Add word to DB
const add = (wordObj) => {
  return Words
  .findOneAndUpdate(
    {word, definition},
    {},
    {upsert: true}
  )
};

//Find word to edit in DB
const find = (word) => {
  return Words
  .find({word})
};

//Gets all words from the DB
const getAll = () => {
  return Words
    .find();
}

//Removes word from DB
const remove = (word) => {
  return Words
  .deleteOne({word})
};

//Searches DB for word like term
const search = (term) => {
  return Words
  .find({word: `/${term}/i`})
};

//Replace edited word with new word in DB
const update = (id) => {
  return Words
  .findByIdAndRemove(id)
};


//EXPORT MODELS
module.export = {
  add,
  find,
  remove,
  search,
  update
}
