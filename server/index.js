
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
  })

let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));