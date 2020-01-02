import React, {Component} from 'react';
// regenerattor is to use ES6 arrow functions
import "regenerator-runtime/runtime";
const guardianAPIKey = process.env.GUARDIAN_API_KEY

// NOTE: I'd normally place this in a process.env file and hide it from GitHub.
// for the purpose of this take home, I'm leaving it here so it's easier to run the file.

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      cache: {
        guardian: {
          results: {},
          pageNum: 1
        },
      },
      }
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  async fetchArticles(source, searchParams){
    // need to add search Params to the request parameters (add to query string);


    try {
      console.log('this.state.cache: ', this.state.cache)
      let queryString = `http://localhost:3000/read/${source}/${searchParams}/${this.state.cache[source].pageNum}`;
      const fetchedData = await fetch(queryString);
      const results = await fetchedData.json();
      console.log('results', results);
    }
    catch(err){
      console.error(err);
    }
    // place search paramters in the get request, and pull it from req.params

//     const options = {
//       headers: {
//         "X-API-Key": guardianAPIKey
//       }
//     };
// // need to move API to server side to protect it --> let the server handle the requests, and then just give the data back to the front-end
//     let API = "https://content.guardianapis.com/search"
//     let fetchedData;

//     if (!arguments[0]){
//       fetchedData = await fetch(API, options);
//     }
//     // else, modify the API based on the search parameters and pass that to fetch!

//     const results = await fetchedData.json();
//     console.log('results', results);
//     // add data to cache / state
//     // update state


  }

  
  // NOTE: on very first render, render() runs before componentDidMount. Need to handle that initial render for data fetching in component (e.g. return null or something)
  componentDidMount(){
    
  }

  // runs when component updates and compares previous props and prev state to current props and current state
  componentDidUpdate(prevProps, prevState){}

  render(){
    return(
      <button onClick={()=>this.fetchArticles('guardian', 'debate+immigration')}>GUARDIAN</button>
    )
  }

}

export default Home;