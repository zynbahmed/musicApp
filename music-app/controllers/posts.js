const Post = require('../models/post')
const User=require('../models/user')

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
const post = await Post.findById(req.params.id)
if (!post) {return res.redirect('/')}
//const userId = await User.find
// const a=post.user
// const b=  req.user._id
// console.log("post.user",post.user)
// console.log("req.body.user",req.user._id)
// console.log(a === b)
// if (a == b){
//await Post.deleteOne({_id:req.params.id})
await post.deleteOne()
res.redirect('/posts')


  }catch (error){
    console.log (error)
    res.redirect('/')
  }
}

const edit = async (req,res) => {
  try {
      const post = await Post.findById(req.params.id)
      res.render('posts/edit',{post})
  }
  catch(error){

  }
}

const editPost = async (req,res)=> {
try {
//console.log(req.body)
const post = await Post.findById(req.params.id)

await post.updateOne({$set:req.body})
await post.save()

//if (post.user === req.body.User.id)
//post.poster=req.body.poster

}catch (erroe){

}
res.redirect("/posts")
}


// Like
const like =async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'post not found' });
    }
    if (!post.like.includes(req.user.id)){
    post.like.push(req.user.id)
    await post.save();}
    else {
     post.like= post.like.filter((userId) => userId !== req.user.id)
     await post.save()
    }
    res.redirect('/posts')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function getTimeAgo(timestamp) {
  const now = new Date();
  const timeElapsed = now - timestamp;

  // Calculate time differences in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeElapsed < minute) {
    return Math.floor(timeElapsed / 1000) + ' seconds ago';
  } else if (timeElapsed < hour) {
    return Math.floor(timeElapsed / minute) + ' minutes ago';
  } else if (timeElapsed < day) {
    return Math.floor(timeElapsed / hour) + ' hours ago';
  } else if (timeElapsed < month) {
    return Math.floor(timeElapsed / day) + ' days ago';
  } else if (timeElapsed < year) {
    return Math.floor(timeElapsed / month) + ' months ago';
  } else {
    return Math.floor(timeElapsed / year) + ' years ago';
  }
}


module.exports = {
  index,
  creatPost,
  deletePost,
  editPost,
  like,
  edit
}
