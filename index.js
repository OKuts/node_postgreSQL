const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', ((req, res) => {
  res.send('<h1>Hello</h1>')
}));


const start = async () => {
  try {

    app.listen(PORT, () => {
      console.log('listening port ' + PORT);
    })
  } catch (e) {
    console.log(e)
  }
}

start();
