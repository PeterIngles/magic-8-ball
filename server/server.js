// Setup Express
const express = require("express");
const bodyParser = require("body-parser");
const pool = require('../modules/pool');
const app = express();

const PORT = 5000;

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static files
app.use(express.static("server/public"));

app.get('/fortune', (req, res) => {
  console.log('in tasksRouter GET')

  let queryText = `
  SELECT * FROM "fortunes"
  ORDER BY RANDOM()
  LIMIT 1;;`

  pool.query(queryText)
  .then( result => {
      console.log('fortunes GET is running')
      res.send(result.rows)
  })
  .catch( error => {
      console.log('error in fortunes GET', error)
      res.sendStatus(500)
  })
})

// Listen to PORT
app.listen(PORT, () => {
  console.log("🙉 on PORT", PORT);
});

// [ ] npm install express
// [ ] npm install pg ( To Make SQL queries)
// [ ] npm install nodemon ( Auto restarts the server)
