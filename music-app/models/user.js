const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  likedSongs: [String],
  firstlog: {type:Boolean , default:true },
  role : {type:String , enum:["admin","user"] ,default:"user"} 
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);