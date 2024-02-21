const express = require('express');
const mongoose =require('mongoose')

const blogRoutes = require('./routes/blogRoutes')
// express app
const app = express();
const dbURLI ='mongodb+srv://divinemaina:divine123@blogtut.j7qa3tk.mongodb.net/blogtut?retryWrites=true&w=majority'
mongoose.connect(dbURLI).then((result)=>app.listen(3000)).catch((err)=>console.log(err))

app.use(express.static('public'));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/add-blog',(req,res)=>{
const blog = new Blog({
  title:'new blog1111',
  snippet:'abou t m new blog',
  body:'more about my blog'
});

blog.save().then((result)=>{res.send(result)

}).catch((err)=>{console.log(err);})
})


app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
app.use(blogRoutes)
// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});