// import { createContext, useState } from "react";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";



const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {

  const initialState = {
    users: [],
    loading:true,

  }

  // dispatch => function -> export the action from here to GithubReducers at a state
  const [ state, dispatch ] = useReducer(githubReducer, initialState);

  // const [users, setUsers] = useState([]); // it will be fetched from the API
  // const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    // { headers: { Authorization: ... } }: This is the *CONFIGURATION OBJECT* passed to the fetch function
    // "Authorization" header: with a value that includes the word "token" followed by the GitHub access token.
    // The access token is taken from the REACT_APP_GITHUB_TOKEN environment variable. 
    // This token is used to authenticate the request and access GitHub's API.
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });


    const data = await response.json(); // parsing the data fetched from the API to json
    console.log(data);

    // setUsers(data);
    // setLoading(false);
    
    // dispatching an object
    dispatch ({
      type:'GET_USERS',
      payload: data,
    })

  }



  return <GithubContext.Provider
                value={{
                      // users, 
                      //  loading,
                       users:   state.users,
                       loading: state.loading,
                       fetchUsers
                      }}>
    {children}
  </GithubContext.Provider>
}


export default GithubContext
