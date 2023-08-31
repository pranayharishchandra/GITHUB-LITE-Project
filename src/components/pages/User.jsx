// this page is for individual user profile
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GithubContext from "../context/github/GithubContext"
import Spinner from "../shared/spinner/Spinner";
import { Link } from "react-router-dom";

import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa' 

import './style/user.css'
// import './style/user.scss'


// match doesn't works in version 6, here use params, it works with version 5 and 6 both
function User() {
    // const { getUser, user, loading, getUserRepos, repos } = useContext(GithubContext);

    const { getUser, user, loading, } = useContext(GithubContext);

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

    console.log('user', user);

    const {
        name,
        // type,
        avatar_url,
        location,
        bio,
        // blog,
        // // twitter_username,
        // login,
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
        <div className="profile-card-container" style={{}}>
            <div className="profile-card"></div>
            <input id="slider" className="customSlider" type="checkbox" />
            <label htmlFor="slider"></label>

            <div className="wrapper">
                <div className="top-icons">
                    <i className="fas fa-long-arrow-alt-left"></i>
                    <i className="fas fa-ellipsis-v"></i>
                    <i className="far fa-heart"></i>
                </div>

                <div className="profile">
                    <img src={`${avatar_url}`} className="thumbnail" alt="" />

                    <div className="check"><i className="fas fa-check"></i></div>
                    <h3 className="name">{`${name}`}</h3>
                    {hireable && <p className="title">HIRABLE</p>}
                    {bio && <p className="description">{bio}</p>}
                    {location && <p className="title" style={{marginTop:'15px', marginBottom:'15px'}}>{`${location}`}</p>}

                    <Link to={html_url} style={{textDecoration:'none'}}>
                    <button type="button" className="btn" style={{fontSize:'22px'}}>GITHUB</button>
                    </Link>
                        
                </div>

                <div className="social-icons">
                    <div className="icon">
                        <a href="/"><i className="fab fa-dribbble"><FaCodepen /></i></a>
                        <h4>999</h4>
                        <p>REPOS</p>
                    </div>

                    <div className="icon">
                        <Link to="#"><i className="fab fa-behance"> <FaUsers /> </i></Link>
                        <h4>{followers}</h4>
                        <p>Followers</p>
                    </div>

                    <div className="icon">
                        <Link to="#"><i className="fab fa-twitter"> <FaUserFriends /> </i></Link>
                        <h4>{following}</h4>
                        <p>Following</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default User
