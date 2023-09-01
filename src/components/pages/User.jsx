// this page is for individual user profile
import { FaCodepen, FaUserFriends, FaUsers,  } from 'react-icons/fa'
import { PiFolderUserBold } from 'react-icons/pi'
import { MdLocationOn } from "react-icons/md";

import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

import GithubContext from "../context/github/GithubContext"
import Spinner from "../shared/spinner/Spinner";
import RepoList from "../repos/RepoList";


import './style/user.css'


// match doesn't works in version 6, here use params, it works with version 5 and 6 both
function User() {
    // const { getUser, user, loading, getUserRepos, repos } = useContext(GithubContext);

    const { getRepos, repos } = useContext(GithubContext);
    const params = useParams();

    const { user, loading, } = useContext(GithubContext);
    const { getUser } = useContext(GithubContext);


    useEffect(() => {
        async function fetchData() {
            await getUser(params.login);
        };
        fetchData();

        async function fetchData2() {
            await getRepos(params.login);
        };
        fetchData2();

    }, []);

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
        // public_gists,
        hireable,
    } = user;


    /*  Get the login param from the URL... http://localhost:3000/user/pranayharishchandra 
        "/user/:login"  ... remember this
        so when use have written somthing after :
        you can extract that part using useParams, if not understood visit following link
        https://reactrouter.com/en/main/hooks/use-params#useparams 
    */
    return (
        <div className="profile-card-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <div className="profile-card" style={{ width: '100vw', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>

                <input id="slider" className="customSlider" type="checkbox" />
                <label htmlFor="slider"></label>

                <div className="wrapper" style={{ width: '80vw', overflow: 'hidden', margin: '15px auto', opacity: '.88' }}>


                    <div className="profile">
                        <img src={`${avatar_url}`} className="thumbnail" alt="" />

                        <div className="check"><i className="fas fa-check"></i></div>

                        <div >
                            <h3 className="name" >{`${name}`}</h3>
                            <div>
                                {hireable && <p className="title" >HIRABLE</p>}
                            </div>

                        </div>



                        {bio && <p className="description" style={{ fontSize: '18px', marginTop:'10px', marginBottom:'-10px' }}>{bio}</p>}

                        {location && ( 
                            <div style={{display:'grid', margin:'0 auto' }}>
                                <p className="title" style={{ marginTop: '15px', marginBottom:'-9px'}}>    <MdLocationOn style={{fontSize:'20px'}}/>    </p> 
                                <p className="title" style={{  marginBottom: '15px' }}>   {`${location}`}   </p>
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
                    <div className="repo-items">

                    </div>
                </div>
            </div>

            {public_repos !== 0 && <RepoList repos={repos} />}


        </div>

    )
}

export default User
