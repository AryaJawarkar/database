const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

const connectDB =(url)=>{
    mongoose.connect(url).then(()=>console.log('connected'))
    
}

module.exports = connectDB;