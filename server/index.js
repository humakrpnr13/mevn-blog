const express = require('express')
const app = express()
const PORT = 3000

const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI, {
    })
    .then(() => console.log('MongoDB Database Connected...'))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })

const postRoutes = require('./routes/postRoutes');
const contact = require('./routes/contact');

app.use('/api/posts', postRoutes);
app.use('/api/contact', contact);

app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))