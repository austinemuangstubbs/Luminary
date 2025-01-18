import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// import Illuminate from './illuminate.js';
import Illuminate from './illuminate.js';


// const Illuminate = require(path.join(
//   __dirname,
//   './illuminate.js'
// ));


// Parse JSON bodies
app.use(express.json()); 



app.get('/v1/images/:imageId', (req, res) => {
  const imageId = req.params.imageId;
  return res.status(200).sendFile(path.join(__dirname, `../data/images/${imageId}.jpg`));
});

app.get('/v1/configs/:configId', (req, res) => {
    const configId = req.params.configId;
    return res.status(200).sendFile(path.join(__dirname, `../data/configs/${configId}.json`));
});

app.get('/v1/templates', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../data/template.json'));
});

app.post('/v1/illuminate', async function (req, res) {
  console.log("req in post express illuminate", req)
  const body = req.body;
  const message = req.body.message
  const language = req.body.language
  console.log("req.body in post express illuminate", req.body)
  console.log("message in post express illuminate", message)
  console.log("language in post express illuminate", language)
  
  const response = await Illuminate(message,language)
  // run openai api translate calls
  return res.status(200).send({"translation":response})
});
// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);
