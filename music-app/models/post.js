const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema= new Schema ({
    poster : {type: String ,require:true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String,
      like: {type: Array,
              default:[]
      },
      comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    }, {
      timestamps: true

})

module.exports = mongoose.model('Post',postSchema)