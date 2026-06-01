const express = require ('express');
const logger = require('./middleware/logger');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.get('/', (req,res)=> {
    res.send('Hello World');
})

app.use(logger);


app.listen(process.env.PORT, () =>  {
    console.log(`Server is running on port ${process.env.PORT}`);
});