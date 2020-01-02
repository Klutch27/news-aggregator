const express = require('express');
const articleRouter = express.Router();
const articlesController = require('./controllers/articlesController.js');

articleRouter.get('/:src/:searchTerms/:page', articlesController.fetchArticles, (req, res, next)=>{
  console.log('hit here');
  res.status(200).json(res.locals.guardianResults);
});

module.exports = articleRouter;