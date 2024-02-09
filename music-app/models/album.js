const albumSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    releaseYear: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      },
      min: 1927
    },
    genre: { 
        type: String, 
        required: true 
    },
    link: { 
        type: String, 
        required: true
    },
  }, {
    timestamps: true
  });
  
module.exports = mongoose.model('Album', albumSchema);