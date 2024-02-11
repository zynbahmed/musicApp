const Review=require('../models/review')
const Album = require('../models/album')

const addReview = async (req,res) =>{
try {
const album = await Album.findById(req.params.id)
res.render('reviews/add',{album})

}catch (error){
  res.redirect('/')
}

}


const creatReview = async (req, res) => {
    try {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
    const newReview = await Review.create(req.body)
    const album=await Album.findById(req.params.id)
     album.reviews.push(newReview._id)
     await album.save()
    //console.log('newReview._id',newReview._id)
    res.redirect('/albums/'+req.params.id)
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
    
  }

module.exports = {
  addReview,
  creatReview
}