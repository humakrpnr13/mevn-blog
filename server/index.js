const express = require('express')
const app = express()
const PORT = 3000

const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
// const routes = ... routerların pathi gelecek 

require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI, {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Database Connected...'))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })

//app.use() burada routerların pathi olacak
app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))