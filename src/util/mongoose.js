
module.exports = {
    mutipleMongooseToObject: function(mutipleMongooses){
        return mutipleMongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}