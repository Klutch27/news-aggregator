const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const articlesController = require('./controllers/articlesController');

express.json();
express.urlencoded({extended: true});

app.use(express.static(path.join(__dirname, '../build')));

app.get('/articles/:src', articlesController.fetchArticles, (req, res, next)=>{

  switch(req.params.src){
    case 'guardian':
      res.status(200).json(res.locals.guardianResults);
  }
  
});

app.use('/', (req, res, next)=>{
  res.status(404).json('The page you are looking for does not exist.');
});

app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`));