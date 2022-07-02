const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'mysql'
});

const Response = db.define('response', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.STRING,
  phone: Sequelize.STRING,
  credit: Sequelize.STRING,
  expmon: Sequelize.STRING,
  expyr: Sequelize.STRING,
  cvv: Sequelize.STRING,
  billzip: Sequelize.STRING,
});

Response.sync();

db.submit = function(purchaseObj) {
  return Response.upsert(purchaseObj)
  .then(() => {
    console.log(`Purchase made by "${purchaseObj.name}`)
  })
  .catch((err) => {
    console.error(err);
    console.error(`An error occured in the purchase made by ${purchaseObj.name}`)
    return (err);
  });
}

module.exports = db;
