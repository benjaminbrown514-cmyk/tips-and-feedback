const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const diagnosticsData = require('./db/diagnostics.json');

const PORT = process.env.port || 3001;



const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


//Get Route for 404 page
app.get('/404', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/404.html'))
);



app.get('/api/diagnostics', (req, res) => res.json(diagnosticsData));

//app.get('/', (req, res) => res.send('Visit http://localhost:3001/api/diagnostics'));


// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);








