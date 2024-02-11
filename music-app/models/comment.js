const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema= new Schema ({
    content : {type: String ,require:true },
    rating : Number , 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String,

    }, {
      timestamps: true

})

module.exports = mongoose.model('Comment',commentSchema)