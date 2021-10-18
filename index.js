const express = require('express');
const userRouter = require('./routes/user.router');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use('/api', userRouter);


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
