// earlier we were calling dispatch from the functions in the GithubContex.js file
// but now we will do that from this file

import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// creating an instance of axios
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
})

/** REAFACTORING CODE
 * actions will not call setLoading() because we're going to dispatch loading
 * from the component right before we call the action.
 * also, don't forget to export the function so to call it from the component
 */

export async function searchUsers(text) {

  const params = new URLSearchParams({ q: text });

  /**NOTE : 
   * 1. you can to get, post, etc
   * 2. you don't need to do "await response.jason()", like what we used to do with the fetched API,
   * now we will get the response including the jason data
   * 3. what we wanna fetched will be in an object called "data", so you will have to do 
   * response.data ( previously u did -- response only)
   */

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;

  /** RESPONSE.DATA FORMAT
  {
      "total_count": 1,
      "incomplete_results": false,
      "items": [
          {
              "login": "pranayharishchandra",
              "id": 44168141,
              "node_id": "MDQ6VXNlcjQ0MTY4MTQx",
              "avatar_url": "https://avatars.githubusercontent.com/u/44168141?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/pranayharishchandra",
              "html_url": "https://github.com/pranayharishchandra",
              "followers_url": "https://api.github.com/users/pranayharishchandra/followers",
              "following_url": "https://api.github.com/users/pranayharishchandra/following{/other_user}",
              "gists_url": "https://api.github.com/users/pranayharishchandra/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/pranayharishchandra/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/pranayharishchandra/subscriptions",
              "organizations_url": "https://api.github.com/users/pranayharishchandra/orgs",
              "repos_url": "https://api.github.com/users/pranayharishchandra/repos",
              "events_url": "https://api.github.com/users/pranayharishchandra/events{/privacy}",
              "received_events_url": "https://api.github.com/users/pranayharishchandra/received_events",
              "type": "User",
              "site_admin": false,
              "score": 1.0
          }
      ]
  }
   */

};

//   fetching getUser and geRepos in same time
export async function getUserAndRepos(login) {

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  // const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, { // repos from a-z order 

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params.toString()}`)
  ]);

  return { user: user.data, repos: repos.data }

}

/** FUNCTIONS BEFORE AXION

export async function searchUsers(text) {
  
  // now we will call loading from the components, right before we call the action
  // setLoading();

  const params = new URLSearchParams({ q: text }); // 'q=text'

  const response = await fetch(`${GITHUB_URL}/search/users?${params.toString()}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items: data } = await response.json(); // parsing the data fetched from the API to json

  console.log('searchUsers', data);


  return data;
  // dispatch({
  //   type: 'GET_USERS',
  //   payload: data,
  // })
  
};


// SINGLE USER DATA
export async function getUser(login) {

  // setLoading();

  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = '/notfound'
    return;
  }

  // for a single user we recieve as an object
  const data = await response.json();
  console.log('getUser', data);


  return data;
  // dispatch({
  //   type: 'GET_USER',
  //   payload: data,
  // })

};


// FETCHING USER REPOS
export async function getRepos(login) {

  // setLoading();

  // params.toString() // 'sort=created&per_page=10' // to know about inital query attributes 
  // go that website (here github) api docs
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  // const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, { // repos from a-z order
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params.toString()}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });


  const data = await response.json();

  console.log('getRepos', data);

  return data;
  // dispatch({
  //   type: 'GET_REPOS',
  //   payload: data,
  // })

};

*/






