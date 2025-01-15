const express = require('express');
const app = express();
const path = require('path');




app.get('/v1/images/:imageId', (req, res) => {
  const imageId = req.params.imageId;
  return res.status(200).sendFile(path.join(__dirname, `../data/images/${imageId}.jpg`));
});

app.get('/v1/config/:configId', (req, res) => {
    const configId = req.params.configId;
    return res.status(200).sendFile(path.join(__dirname, `../data/configs/${configId}.json`));
});

app.get('/v1/templates', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../data/template.json'));
});
// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);

