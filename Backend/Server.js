const express = require ('express');
const logger = require('./middleware/logger');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
app.get('/', (req,res)=> {
    res.send('Hello World');
})

mongoose.connect(process.env.MONGO_URI)
     .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`DB connected Successfully and Server is running in port ${process.env.PORT}`)
        })
     }).catch((error) => console.log(error));

app.use(logger);


