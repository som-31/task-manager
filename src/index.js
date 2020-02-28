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

app.listen(port, () => {
    console.log('App is up and running on port '+port);
});


const Task = require('./models/task');
const User = require('./models/user');
const sample = async () => {
    //   const task = await Task.findById('5e58e83f3e6b6a6bcd183cbb');
    //   await task.populate('owner').execPopulate();
    //   console.log(task.owner)
    const user = await User.findById('5e58e716b010b169dc33f3af');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks)
}

sample();