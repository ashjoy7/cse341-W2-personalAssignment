const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const swaggerRoutes = require('./routes/swagger'); 

const port = process.env.PORT || 8080;
const app = express();

const debug = require('debug');
debug.enable('mongodb,tls');

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
    })
  .use('/', require('./routes'));

// Serve Swagger UI
app.use('/', swaggerRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
