require('dotenv').config();
require('./config/database').connect();
const express = require('express');

const User = require('./model/user')

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello from auth system');
});

app.post('/register', async (req,res) => {

    const { firstname ,lastname ,email ,password }  = req.body;

    if (!(firstname && lastname && email && password)) {
        
        res.status(401).send("All Fields Required")
    }

    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
        res.status(401).send("User Already Exists");

    }
});

module.exports = app;