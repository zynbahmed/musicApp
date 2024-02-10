const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema= new Schema ({
    content : {type: String ,require:true },
    rating : Number , 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      userName: String,
      userAvatar: String,

    }, {
      timestamps: true

})

module.exports = mongoose.model('Review',reviewSchema)