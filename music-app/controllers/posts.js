const Post = require('../models/post')
const User=require('../models/user')
const Comment= require('../models/comment')

const index = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('comment')
    const title="POSTS"
    res.render('posts/index', { posts,title })
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
  } catch (error) {
    console.log(error)
  }
  res.redirect('/posts')
}

const deletePost = async (req,res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {return res.redirect('/')}
    await post.deleteOne()
    res.redirect('/posts')
  }catch (error){
    console.log (error)
    res.redirect('/')
  }
}

const edit = async (req,res) => {
  try {
    const title="Edit Post"
    const post = await Post.findById(req.params.id)
    res.render('posts/edit',{post , title})
  }catch(error){
    console.log (error)
    res.redirect('/')
  }
}

const editPost = async (req,res)=> {
  try {
    const post = await Post.findById(req.params.id)
    await post.updateOne({$set:req.body})
    await post.save()
    res.redirect("/posts")
  }catch (erroe){
    console.log (error)
    res.redirect('/')
  }
}


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
    } res.redirect('/posts')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


const  addComment  =async (req,res) =>{
  const post = await Post.findById(req.params.id).populate('comment')
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const comment = await Comment.create(req.body)
  post.comment.push(comment._id)
  await post.save()
  res.redirect('/posts')
}

module.exports = {
  index,
  creatPost,
  deletePost,
  editPost,
  like,
  edit,
  addComment
}
