const express = require('express');
const { ObjectID } = require('mongodb');
require('./db/mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');

const app = express();

const port = process.env.PORT || 3000;

//to parse incoming json data to object
app.use(express.json());


const multer = require('multer');
const upload = multer({
    dest : 'images',
    limits : {
        fileSize : 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a word document'))
        }

        cb(undefined, true);
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
})


//include Routers
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('App is up and running on port '+port);
});

