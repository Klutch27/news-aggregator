require('dotenv').config();
const fetch = require('node-fetch');
const articlesController = {};
const apiKey = process.env.GUARDIAN_API_KEY;

// create an abstract fetch request that can be created based upon the src?

articlesController.fetchArticles = async (req, res, next)=>{

  switch(req.params.src){
    case 'guardian':
      // fetch guardian articles and return them
      try {
        const finalSearchTerms = req.params.searchTerms.split('+').join('%20AND')
        // search?page=1 // ==> the very first parameter is the page #
            let API = "https://content.guardianapis.com/search?";
            // add any search parameters to query string
            // then finally add on apiKey;
            let queryString = API + req.params.page + "q=" + finalSearchTerms + `&api-key=${apiKey}`;
            const fetchResponse = await fetch(queryString);
            const results = await fetchResponse.json();
            console.log('results', results);
            res.locals.guardianResults = results.response.results;
            console.log('res.locals.guardianResults', res.locals.guardianResults);
            next();
          
          // default:
      }
      catch(err){
        console.error(err);
      }
      break;
      
  }

}

module.exports = articlesController;