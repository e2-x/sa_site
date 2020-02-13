const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const IMG_LOCATION = 'img/';

let files = fs.readdirSync(IMG_LOCATION);


// SERVER STUFF
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/img', (req, res) => {
  // res.send({ express: 'Hello From Express' });
  res.type('application/json');
  sendImg(res, files);
});

app.post('/api/world', (req, res) => {
  // console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// HELPER FUNCTIONS
function sendImg(res, files){
    let json = JSON.stringify(updateFileNames(files), 0, 2);
    let jsonObj = JSON.parse(json);
    console.log(typeof(jsonObj));
    res.json(jsonObj);
    // res.json(JSON.parse(obj));
}

function updateFileNames(files){
  // add stuff here for adding path to file names so we can then 
  const prefix = '../img/';
  let temp = {};

  for(let i = 0; i < files.length; i++){
    temp[i] = prefix + files[i];
  }
  return temp;
}
