require('dotenv').config({path: __dirname+'/../.env'});
const express = require('express');
const cors = require('cors');
const { postMessages } = require('./controllers/postMessages.js');
const app = express();
const PORT = process.env.SERVER_PORT||5000;

app.use(cors());
app.use(express.json());

app.post('/messages', postMessages);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
}).on('error',console.log);


