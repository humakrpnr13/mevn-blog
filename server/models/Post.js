const{Schema, model, default: mongoose} = require('mongoose')

const postSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    tags: [String],
    category: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    imageUrl: {type: String, trim: true},
    imageAlt: {type: String, trim: true},
});

module.exports = mongoose.model('Post', postSchema);