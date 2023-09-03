// earlier we were calling dispatch from the functions in the GithubContex.js file
// but now we will do that from this file

const GITHUB_URL   = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

/** REAFACTORING CODE
 * actions will not call setLoading() because we're going to dispatch loading
 * from the component right before we call the action.
 * also, don't forget to export the fucntion so to call it from the component
 * 
 */

export async function searchUsers(text) {

  // now we will call loading from the components, right before we call the action
  // setLoading();

  /*
   // { headers: { Authorization: ... } }: This is the *CONFIGURATION OBJECT* passed to the fetch function
   // "Authorization" header: with a value that includes the word "token" followed by the GitHub access token.
   // The access token is taken from the REACT_APP_GITHUB_TOKEN environment variable. 
   // This token is used to authenticate the request and access GitHub's API.
   */

  const params = new URLSearchParams({ q: text }); // 'q=text'

  const response = await fetch(`${GITHUB_URL}/search/users?${params.toString()}`, {
    // const response = await fetch(`${GITHUB_URL}/users?q=${text}`, { // this link not working idk why
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items: data } = await response.json(); // parsing the data fetched from the API to json

  console.log('searchUsers', data);

  /** FORMAT OF API FETCHED
   * * await fetch(`${GITHUB_URL}/search/users?q=${params}`
   * the above is giving an object in response but we only want the values whose key is 'items'
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
  /* USER OBJ
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
      "name": "PRANAY HARISHCHANDRA",
      "company": null,
      "blog": "",
      "location": "BANGALORE, KARNATAKA, INDIA",
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 12,
      "public_gists": 0,
      "followers": 16,
      "following": 13,
      "created_at": "2018-10-15T13:53:21Z",
      "updated_at": "2023-08-05T05:36:12Z",
      "private_gists": 0,
      "total_private_repos": 4,
      "owned_private_repos": 4,
      "disk_usage": 23659,
      "collaborators": 0,
      "two_factor_authentication": false,
      "plan": {
          "name": "free",
          "space": 976562499,
          "collaborators": 0,
          "private_repos": 10000
      }
  }
    
   */

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


  /**
  [
      {
          "id": 472797658,
          "node_id": "R_kgDOHC5R2g",
          "name": "cpp-learning",
          "full_name": "pranayharishchandra/cpp-learning",
          "private": false,
          "owner": {
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
              "site_admin": false
          },
          "html_url": "https://github.com/pranayharishchandra/cpp-learning",
          "description": null,
          "fork": false,
  */

  const data = await response.json();

  console.log('getRepos', data);

  return data;        
  // dispatch({
  //   type: 'GET_REPOS',
  //   payload: data,
  // })

};







