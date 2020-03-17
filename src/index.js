const express = require('express');
const { ObjectID } = require('mongodb');
require('./db/mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');

const app = express();

const port = process.env.PORT

//to parse incoming json data to object
app.use(express.json());

//include Routers
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('App is up and running on port '+port);
});

