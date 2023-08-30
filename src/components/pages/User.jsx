// this page is for individual user profile
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GithubContext from "../context/github/GithubContext"
import Spinner from "../shared/spinner/Spinner";
import { Link } from "react-router-dom";

import './style/user.css'

// match doesn't works in version 6, here use params, it works with version 5 and 6 both
function User() {
    // const { getUser, user, loading, getUserRepos, repos } = useContext(GithubContext);

    const { getUser, user, loading,  } = useContext(GithubContext);

    const params = useParams();

    // getUser(params.login);
    /* writing getUser(params.login); in useEffect, in user login gives error 
     * when coming back to home page why
     * Cannot read properties of undefined (reading 'length')
     * TypeError: Cannot read properties of undefined (reading 'length')
     */
    
    
    /* WARNING FOR BELOW CODE: React Hook useEffect has missing dependencies: 'getUser' and 'params.login'.
     *  Either include them or remove the dependency  */

    // useEffect (() => {
    //     getUser(params.login);
    // //     // getUserRepos(params.login);
    // },[]);



    //  useEffect(() => {
    //     async function fetchData() {
    //       await getUser(params.login);
    //     };
    
    //     fetchData();
    // //   }, [params.login]);
    //   }, [getUser, params.login]);

    if (loading) {
        return (<Spinner />)
    }

    console.log('user',user);

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = user;

    




    /*  Get the login param from the URL... http://localhost:3000/user/pranayharishchandra 
        "/user/:login"  ... remember this
        so when use have written somthing after :
        you can extract that part using useParams, if not understood visit following link
        https://reactrouter.com/en/main/hooks/use-params#useparams 
    */
  return (
<>
  <div className="user-container">
    <Link className="back-to-search" to='/'>BACK TO SEARCH</Link>
    user : {params.login}
            
    <div className="profile">
        <div className="image">
          <figure>
            <img src={avatar_url} alt='user-img' style={{width:'60px'}}/>
          </figure>
        </div>
        <div className="profile-contents">
          <div className="profile-content">NAME  :  {name} </div>
          <div className="profile-content">LOGIN :  {login}</div>

          {hireable && <div className="profile-content">STATUS : HIRABLE </div>}
          <div className="profile-content"> BIO : <p>{bio}</p></div>

          <div className="profile-content"> </div>
        </div>
    </div>

    
            
  </div>
</>
  )
}

export default User
