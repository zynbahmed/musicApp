const Review=require('../models/review')

const addReview = (req,res) =>{
res.render('reviews/add')
}


const creatReview = async (req, res) => {
    try {

    
      //await Post.save()
    } catch (error) {
      console.log(error)
    }
    res.redirect('/posts')
  }

module.exports = {

}