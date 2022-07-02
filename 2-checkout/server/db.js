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
          name VARCHAR(255) NOT NULL,
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
          CVV VARCHAR(10) NOT NULL,
          billzip VARCHAR(10) NOT NULL
        )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
