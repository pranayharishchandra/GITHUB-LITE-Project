import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";


const GithubContext = createContext();


// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


export function GithubProvider({ children }) {


  const initialState = {
    users: [],           // details (object) of all the users
    repos: [],           // user repos
    user : {},           // details of a single user
    // loading:true,
    loading: false,      // making it intially false, so we don't see the loading, UserResults,
                        // and we only wanna see loading (loading=true) WHEN THE DATA IS BEING FETCHED
                       // so we will make loading true in start of the feching function and will turn it to false
                      // when the function ends after fetching the info, then we will change loading state to false 
                     // using reducers
  };


  const [state, dispatch] = useReducer(githubReducer, initialState);



  // // Set Loading -- uplifting state of loading from false to true
  // function setLoading() {
  //   dispatch({
  //     type: 'SET_LOADING'
  //   })
  // };






  return <GithubContext.Provider
                                  value={{
                                    ...state,
                                    // user: state.user,
                                    // users: state.users,      
                                    // repos : state.repos,
                                    // loading: state.loading,


                                    dispatch,
                                    // searchUsers,
                                    // getRepos,
                                    // setUsers,
                                    // getUser,
                                  }}>
    {children}
  </GithubContext.Provider>
}


export default GithubContext;
