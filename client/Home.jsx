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
      cache: {},
      currentPage: 1
    };
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  async fetchArticles(searchParams){

    const options = {
      headers: {
        "X-API-Key": guardianAPIKey
      }
    };
// need to move API to server side to protect it --> let the server handle the requests, and then just give the data back to the front-end
    let API = "https://content.guardianapis.com/search"
    let fetchedData;

    if (!arguments[0]){
      fetchedData = await fetch(API, options);
    }
    // else, modify the API based on the search parameters and pass that to fetch!

    const results = await fetchedData.json();
    console.log('results', results);
    // add data to cache / state
    // update state


  }

  
  // NOTE: on very first render, render() runs before componentDidMount. Need to handle that initial render for data fetching in component (e.g. return null or something)
  componentDidMount(){
    this.fetchArticles();
  }

  // runs when component updates and compares previous props and prev state to current props and current state
  componentDidUpdate(prevProps, prevState){}

  render(){
    return null;
  }

}

export default Home;