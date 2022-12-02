const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
      
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    })
    .then(console.log(`DATABASE CONNECTED SUCCESSFULLY`))
    .catch((err) => {
        console.log(`DATABSE CONNECTION FAILED`);
        console.log(err);
        process.exit(1);
    });
}