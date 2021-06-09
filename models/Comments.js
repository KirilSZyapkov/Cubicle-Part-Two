const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true, maxLength: 250}
})

module.exports = model('Comment', schema);