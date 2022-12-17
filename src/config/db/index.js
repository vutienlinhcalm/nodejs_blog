const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/education');
        mongoose.set('strictQuery', true);
        console.log('Connected to successfully');
    }catch(err){
        console.log('Connected to failed');

    }
}

module.exports = {connect};