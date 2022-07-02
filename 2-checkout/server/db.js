const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses
        (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          user_id VARCHAR(255) NOT NULL UNIQUE,
          fullname VARCHAR(255) NOT NULL,
          email VARCHAR(255)NOT NULL,
          password VARCHAR(255) NOT NULL,
          address1 VARCHAR(255) NOT NULL,
          address2 VARCHAR(255) NOT NULL,
          city VARCHAR(255) NOT NULL,
          state VARCHAR(255) NOT NULL,
          zipcode VARCHAR(10) NOT NULL,
          phone VARCHAR(25) NOT NULL,
          credit VARCHAR(20) NOT NULL,
          expmon VARCHAR(5) NOT NULL,
          expyr VARCHAR(10) NOT NULL,
          cvv VARCHAR(10) NOT NULL,
          billzip VARCHAR(10) NOT NULL
        )`
    )
  )
  .catch((err) => console.log(err));

db.submit = function(purchaseObj) {
    return db.queryAsync(
    `INSERT INTO responses (user_id,fullname,email,password,address1,address2,city,state,zipcode,phone,credit,expmon,expyr,cvv,billzip) VALUES ("${purchaseObj.id}","${purchaseObj.name}","${purchaseObj.email}","${purchaseObj.password}","${purchaseObj.address1}","${purchaseObj.address2}","${purchaseObj.city}","${purchaseObj.state}","${purchaseObj.zipcode}","${purchaseObj.phone}","${purchaseObj.credit}","${purchaseObj.expmon}","${purchaseObj.expyr}","${purchaseObj.cvv}","${purchaseObj.billzip}") ON DUPLICATE KEY UPDATE fullname="${purchaseObj.name}", email="${purchaseObj.email}",password="${purchaseObj.password}",address1="${purchaseObj.address1}",address2="${purchaseObj.address2}",city="${purchaseObj.city}",state="${purchaseObj.state}",zipcode="${purchaseObj.zipcode}",phone="${purchaseObj.phone}",credit="${purchaseObj.credit}",expmon="${purchaseObj.expmon}",expyr="${purchaseObj.expyr}",cvv="${purchaseObj.cvv}",billzip="${purchaseObj.billzip}"`
  )
  .then(() => {
    console.log(`Purchase made by "${purchaseObj.name}`)
  })
  .catch((err) => {
    console.error(err);
    console.error(`An error occured in the purchase made by ${purchaseObj.name}`)
    return (err);
  })
}

module.exports = db;
