const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            keepAlive: true,
            useUnifiedTopology: true, 
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });      

        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);
        console.log('Test');
        //exit process with failure
        process.exit(1);

    }
}

module.exports = connectDB;