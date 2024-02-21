const express =require('express')
const Blog =require('../models/blog')
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/blogs');
  });
router.get('/blogs', (req, res) => {
  
    Blog.find().sort({createdAt:-1}).then((result)=>{
      res.render('index', { title: 'all blogs', blogs:result });
  
    }).catch((err)=>{
      console.log(err);
    })
  });
  router.get('/blogs/:id', (req, res) => {
    const id = req.params.id
  
    Blog.findById(id).then((result)=>{
      res.render('detail', { title: 'blog details', blog:result });

    }).catch((err)=>{
      console.log(err);
    })
  });
  router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id
  
    Blog.findByIdAndDelete(id).then((result)=>{
      res.json({redirect:'/blogs'})

    }).catch((err)=>{
      console.log(err);
    })
  });
  
  
  router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  module.exports =router