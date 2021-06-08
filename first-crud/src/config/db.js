import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const host = 'mongodb://localhost:27017/test'
// use with local
const connectToDb = async () => {
    return mongoose.connect(host, { useNewUrlParser: true });
};

export default connectToDb;
