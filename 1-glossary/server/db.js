require("dotenv").config();
const mongoose = require("mongoose");

//Establish a connection to MongoDB
mongoose.connect(`mongodb://localhost:2707/${process.env.DB_NAME}`)
.then(() => {
  console.log(`MongoDB connected to DB ${process.env.DB_NAME}`);
})
.catch((err) => {
  console.error(`MongoDB was unable to conect to DB ${process.env.DB_NAME}`);
});

//Set up schema
const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Glossary = mongoose.model(`${process.env.DB_NAME}`, glossarySchema);

//Set up models

//Add word to DB
const add = (wordObj) => {
  return Glossary
  .findOneAndUpdate(
    {
      word: wordObj.word,
      definition: wordObj.meanings.definitions[0].definition
    },
    {},
    {upsert: true}
  );
};

//TODO: Find and replace
// const findWord = () => {
//   return Glossary
//   .find({word});
// };

//Removes word from DB
const remove = (word) => {
  return Glossary
  .deleteOne({word});
}

//Searches DB for word like term
const search = (term) => {
  return Glossary
  .find({word: `/${term}/i`});
}


//EXPORT MODELS
modules.export = {
  add,
  remove,
  search
}

// TODO: 4. Import the models into any modules that need them

