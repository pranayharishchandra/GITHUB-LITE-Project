// import { createContext, useState } from "react";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";



const GithubContext = createContext();

const GITHUB_URL   = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export function GithubProvider ({ children }) {

  // storing initial state of all the variables in an object
  const initialState = {
    users: [],
    // loading:true,
    loading:false, // making it intially false, so we don't see the loading, UserResults,
                  // and we only wanna see loading (loading=true) WHEN THE DATA IS BEING FETCHED
  };

  // dispatch => function -> export the action from here to GithubReducers at a state
  // githubReducer -> the reduce function we are using
  const [ state, dispatch ] = useReducer(githubReducer, initialState);

  // const [users, setUsers] = useState([]); // it will be fetched from the API
  // const [loading, setLoading] = useState(true);

  // async function fetchUsers() {
  async function searchUsers(text) {

    setLoading();

    // const params = new URLSearchParams({q:text}); 

    // { headers: { Authorization: ... } }: This is the *CONFIGURATION OBJECT* passed to the fetch function
    // "Authorization" header: with a value that includes the word "token" followed by the GitHub access token.
    // The access token is taken from the REACT_APP_GITHUB_TOKEN environment variable. 
    // This token is used to authenticate the request and access GitHub's API.

    // const response = await fetch(`${GITHUB_URL}/search/users?q=${params.toString()}`, {
      const params = new URLSearchParams({ q: text });

      const response = await fetch(`${GITHUB_URL}/search/users?${params.toString()}`, {
          headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
          },
      });


    // const data = await response.json(); // parsing the data fetched from the API to json
    const { items : data } = await response.json(); // the response we are getting, we only want 'items' value,
                                                    // and we are storing it as data, so i don't need to change my code below
    console.log(data);
    /**
     * * await fetch(`${GITHUB_URL}/search/users?q=${params}`
     * the above is giving an object in response but we only want the values whose key is 'items'
     {
    "total_count": 32098,
    "incomplete_results": false,
    "items": [
        {
            "login": "brad",
            "id": 1614,
            "node_id": "MDQ6VXNlcjE2MTQ=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1614?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/brad",
            "html_url": "https://github.com/brad",
            "followers_url": "https://api.github.com/users/brad/followers",
            "following_url": "https://api.github.com/users/brad/following{/other_user}",
            "gists_url": "https://api.github.com/users/brad/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/brad/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/brad/subscriptions",
            "organizations_url": "https://api.github.com/users/brad/orgs",
            "repos_url": "https://api.github.com/users/brad/repos",
            "events_url": "https://api.github.com/users/brad/events{/privacy}",
            "received_events_url": "https://api.github.com/users/brad/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
      
     */

    // setUsers(data);
    // setLoading(false);
    
    /*
    1. dispatching an object --- after we have fetched the data, set loading to false
     The dispatch function is called with an action object. 
     The action object has a type property that describes the action being performed and 
     additional data (if needed) to update the state.
    
     2. The payload property of the action object contains the data fetched from the API. 
      This payload will be used to update the users array in the state.
    */
    dispatch ({
      type:'GET_USERS',
      payload: data,
    })

  };


  // Set Loading -- uplifting state of loading from false to true
  function setLoading () {
    dispatch({
      type:'SET_LOADING'
    })
  };

  function setUsers(users) {
    dispatch({
      type:'SET_USERS',
      payload:users
    })
  }



  return <GithubContext.Provider
                value={{
                      // users, 
                      //  loading,
                       users:   state.users,
                       loading: state.loading,
                       searchUsers,
                       setUsers
                      }}>
    {children}
  </GithubContext.Provider>
}


export default GithubContext;
