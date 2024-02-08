const Post = require("../models/post")

const index = async (req,res) => {
try {
const posts = await Post.find({})
res.render('/posts/index',{posts})
///sort by time 
}catch (error){
    console.log(error)
}
}

const creatPost = async (req,res) => {
    try {
        await Post.create(req.body)
        await Post.save()
     }catch (error){
         console.log(error)
     }
     res.redirect ('/posts')
}


module.exports = { 
    postsCtrl,
    creatPost
}