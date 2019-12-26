const fetch = require('node-fetch');
const articlesController = {};

// create an abstract fetch request that can be created based upon the src?

articlesController.fetchArticles = async (req, res, next)=>{

  switch(req.params.src){
    case 'guardian':
      // fetch guardian articles and return them
    try {
      // need to move API to server side to protect it --> let the server handle the requests, and then just give the data back to the front-end
          let API = "https://content.guardianapis.com/search?&api-key=bad27263-a370-48ff-b468-ab6c3d9b9406"
          
          const fetchResponse = await fetch(API)
          const results = await fetchResponse.json();
          res.locals.guardianResults = results;
          next();
        
        // default:
    }
    catch(err){
      console.error(err);
    }
      
  }

}

module.exports = articlesController;