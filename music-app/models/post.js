const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema= new Schema ({
    poster : {type: String ,require:true },
    //time ??
    //like : Boolean
})

module.exports = mongoose.model('Post',postSchema)