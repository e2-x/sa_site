const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const IMG_LOCATION = 'img/';
const IMAGES = 
        [{
            src: "https://imgur.com/a/wMZ01ia",
            thumbnail: "https://imgur.com/a/wMZ01ia",
        }]


let files = fs.readdirSync(IMG_LOCATION);


// SERVER STUFF
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  // res.send({ express: 'Hello From Express' });
  createImg(res, files);
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// HELPER FUNCTIONS
function createImg(res, files){
    res.send({ IMAGES });
}