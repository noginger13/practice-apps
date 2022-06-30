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
const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: {
    type: String,
    default: "Add a definition!"
  }
});

const Word = mongoose.model(`${process.env.DB_NAME}`, wordSchema);

//Set up models

//Add word to DB
const add = ({word, definition}) => {
  return Word
  .findOneAndUpdate(
    {word, definition},
    {},
    {upsert: true}
  )
  .exec();
};

//Gets all Word from the DB
const getAll = () => {
  return Word
    .find()
    .exec();
};

//Removes word from DB
const remove = (id) => {
  return Word
  .findByIdAndRemove(id)
  .exec();
};

//Replace edited word with new word in DB
const update = (id, wordObj) => {
  return Word
  .findByIdAndUpdate(id, wordObj)
  .exec();
};


//EXPORT MODELS
module.exports = {
  add,
  getAll,
  remove,
  update
}
