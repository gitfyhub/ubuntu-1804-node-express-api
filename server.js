const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// static content => index.html
// app.use(express.static('../client/build'));
// // app.get('*', (req, res) =>
// app.get('/', (req, res) =>
//   res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
// );

app.get('/', (req, res) => res.send('Hello World!'));

require('./src/routes/customer.routes.js')(app);
require('./src/routes/list.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
//const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
