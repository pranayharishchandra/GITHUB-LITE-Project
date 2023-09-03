// this page is for individual user profile
import { FaUserFriends, FaUsers, } from 'react-icons/fa'
import { PiFolderUserBold } from 'react-icons/pi'
import { MdLocationOn } from "react-icons/md";

import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import GithubContext from "../context/github/GithubContext"
import Spinner from "../shared/spinner/Spinner";
import RepoList from "../repos/RepoList";

// import { getUser, getRepos } from '../context/github/GithubActions';
import { getUserAndRepos } from '../context/github/GithubActions';

import './style/user.css'


// match doesn't works in version 6, here use params, it works with version 5 and 6 both
function User() {

    // const { getRepos, repos, user, loading, getUser } = useContext(GithubContext);
    const { repos, user, loading, dispatch } = useContext(GithubContext);

    const params = useParams(); // see technical thapa video 


    /*  Get the login param from the URL... http://localhost:3000/user/pranayharishchandra 
        "/user/:login"  ... remember this
        so when use have written somthing after :
        you can extract that part using useParams, if not understood visit following link
        https://reactrouter.com/en/main/hooks/use-params#useparams 
    */


        useEffect(() => {
            dispatch({ type: 'SET_LOADING' })

            async function fetchUserData() {
              const userData = await getUserAndRepos(params.login)
              dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
            }
        
            fetchUserData()
          }, [dispatch, params.login])





    /** useEffect BEFORE AXIOS
        useEffect(() => {
            dispatch({
                type: 'SET_LOADING'
            })
    
            async function fetchUserData() {
                // await getUser(params.login);
                const userData = await getUser(params.login);
    
                dispatch({
                    type: 'GET_USER',
                    payload: userData,
                })
            };
    
            fetchUserData();
    
            async function fetchRepoData() {
                // await getRepos(params.login);
                const userRepos = await getRepos(params.login);
    
                dispatch({
                    type: 'GET_REPOS',
                    payload: userRepos,
                })
    
            };
    
            fetchRepoData();
    
            // eslint-disable-next-line react-hooks/exhaustive-deps
            //  ADDING DEPENDENCIES DON'T DO INFINITE RE-RENDERING BECAUSE 
            // -> this is fine because these things aren't constantly changing like before when we had our context        
            // functions that got recreated every time the state changed.
            // So we can pass these in as dependencies.
        }, [dispatch, params.login]);
        */

    if (loading) {
        return (<Spinner />)
    }

    console.log('User.jsx:, user:', user);

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
        // public_gists,
        hireable,
    } = user;


    return name && (
        <div className="profile-card-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transitionDuration: '1s' }}>
            <div className="profile-card" style={{ width: '100vw', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', marginBottom: '50px', transitionDuration: '2s' }}>

                <input id="slider" className="customSlider" type="checkbox" />
                <label htmlFor="slider"></label>

                <div className="wrapper" style={{ width: '80vw', overflow: 'hidden', margin: '15px auto', opacity: '.88', transitionDuration: '1s' }}>


                    <div className="profile">
                        <img src={`${avatar_url}`} className="thumbnail" alt="" />

                        <div className="check"><i className="fas fa-check"></i></div>

                        <div >
                            <h3 className="name" >{`${name}`}</h3>
                            <div>
                                {hireable && <p className="title"> HIRABLE </p>}
                            </div>

                        </div>





                        {bio && <p className="description" style={{ fontSize: '18px', marginTop: '10px', marginBottom: '-10px' }}>{bio}</p>}

                        {location && (
                            <div style={{ display: 'grid', margin: '0 auto' }}>
                                <p className="title" style={{ marginTop: '15px', marginBottom: '-9px' }}>    <MdLocationOn style={{ fontSize: '20px' }} />    </p>
                                <p className="title" style={{ marginBottom: '15px' }}>   {`${location}`}   </p>
                            </div>
                        )}

                        {!location && (
                            <div style={{ display: 'grid', margin: '0 auto' }}>
                                <p className="title" style={{ marginTop: '15px', marginBottom: '-9px' }}>    <MdLocationOn style={{ fontSize: '20px' }} />    </p>


                                <p className="title" style={{ marginBottom: '15px' }}>   {`${name.toUpperCase()}'s`} LOCATION NOT AVALIBLE  </p>
                            </div>
                        )}



                        <Link to={html_url} style={{ textDecoration: 'none' }}>
                            <button type="button" className="btn" style={{ fontSize: '22px' }}>GITHUB</button>
                        </Link>

                    </div>

                    <div className="social-icons" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className="icon">
                            <Link style={{ cursor: 'inherit' }}> <PiFolderUserBold /> </Link>
                            <h4>{public_repos}</h4>
                            <p>REPOS</p>
                        </div>

                        <div className="icon" >
                            <Link style={{ cursor: 'inherit' }}> <FaUsers /> </Link>
                            <h4>{followers}</h4>
                            <p>Followers</p>
                        </div>

                        <div className="icon">
                            <Link style={{ cursor: 'inherit' }}> <FaUserFriends /> </Link>
                            <h4>{following}</h4>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>

            {public_repos !== 0 && <RepoList repos={repos} />}

        </div>

    )
}

export default User
