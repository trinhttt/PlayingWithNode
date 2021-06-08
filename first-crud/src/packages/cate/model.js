import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const cateSchema = new Schema( {
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

cateSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        return next(new Error('this cate has been using'));
    }
    return  next(error);
});

module.exports = mongoose.model('cate', cateSchema);
