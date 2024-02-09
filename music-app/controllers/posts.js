const Post = require('../models/post')

const index = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.render('posts/index', { posts })
    ///sort by time
  } catch (error) {
    console.log(error)
  }
}

const creatPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    await Post.create(req.body)
  
    //await Post.save()
  } catch (error) {
    console.log(error)
  }
  res.redirect('/posts')
}

const deletePost = async (req,res) => {
  try {
//const post = await Post.findOne({ 'post._id': req.params.id})
const post = await Post.findById(req.params.id)
console.log(" postdeleter ",post)

//if (post.user=== req.)
await Post.deleteOne({_id:req.params.id})
//await post.save()
res.redirect('/posts')
if (!post) {return res.redirect('/')}



  }catch (error){
    console.log (error)
    res.redirect('/')
  }
}

module.exports = {
  index,
  creatPost,
  deletePost
}
