const express = require('express');
const { ObjectID } = require('mongodb');
require('./db/mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');

const app = express();

const port = process.env.PORT || 3000;

//to parse incoming json data to object
app.use(express.json());


//include Routers
app.use(userRouter)
app.use(taskRouter)
const bcrypt = require('bcryptjs')

const sample = async () => {
    const password = 'Som_31@idfc';
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)
    const isMatch = await bcrypt.compare('Som_31@ifc', hashedPassword);
    console.log(isMatch);
}
sample();

app.listen(port, () => {
    console.log('App is up and running on port '+port);
});