const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Song = require('./song')

const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const albumSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    artist: {
      type: Schema.Types.ObjectId,
      ref: 'Artist'
    },
    releaseYear: {
      type: Number,
      default: function () {
        return new Date().getFullYear()
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
    songs: [songSchema],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    image: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Album', albumSchema)
