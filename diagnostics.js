const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)))
  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
    console.log(req.body);  
  // TODO: Logic for appending data to the db/diagnostics.json file
    const {time, errors, tip, topic, username  } = req.body;

    if (req.body){
      const newDiagnostic = {
        time,
        error_id: uuidv4(),
        errors,
        tip,
        topic,
        username,
        

      };
    

     const response = {
      status: 'success',
      body: newDiagnostic,
    };

    readAndAppend(newDiagnostic, './db/diagnostics.json');

    res.json(response);
  } else {
    res.json('Error in posting diagnostics');
  }

});


module.exports = diagnostics;


