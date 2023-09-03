import './UserCard.css';

import  PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';



// user is the complete object about user being passed in UserResults.jsx

// function UserCard({ user: { login, id, avatar_url, html_url } }) { // Rename the key prop to customKey
function UserCard ({ user }) { 
  const navigate = useNavigate();

  const { login, type, avatar_url, html_url } = user;

  // const { getUser } = useContext(GithubContext);


  /*FLOW OF THE CODE -- IMP
    1. we first are on this page, which cards of each user
        CASE 1:  WHEN WE ARE GOING TO DIFFERENT PAGE ==>   1. --> since you can't pass it as props
                                                        and in other page you will need to extract getUser function from the GithubContext
                                                        and then the page must be re-rendered, 
                                                        since the page is using info fetched by getUser function
                                                        so you can do "await getUser" in useEffect with empty dependency list

                                                      2. --> other thing you can can do is what you you have done here,
                                                          -> parent function before redirecting the new page, we are using await getUser,
                                                          -> so that when we reach the next page then we have the variables exported by 
                                                          -> GithubUser function already updated, and we can use them directly.
                                    IMPORTANT          ====> but this method will not fecth info when the child page reloaded.., 
                                                                so this method is waste.

                                                          
      CASE 2 : WHEN WE ARE GOING TO DIFFERENT COMPONENT  -->  passing the function getUser or whatever as props
                                                        ---> other thing what you can do it the 2nd thing of different page written above
                                                     
    2. with cards i mean information (login) of each user
    3. if i wanted to use getUser in User.jsx then flow should would have been like:
  */

 // const navigate = useNavigate();
  async function redirectToNewRoute() {
    // await getUser(login); 
    navigate(`/user/${login}`);

  };


  // NOTE: we are not writing the keynames in string,
  return (
    <div className="card" style={{ width: '310px', height: '254px', opacity:'.84' }}>
      <div className="card-details">
        <div className='user-name-pic' style={{ width: '130%', margin: '-10%', height:'100px'}}>
          <img src={avatar_url} alt='' />
          <p className="text-title">{login}</p>

        </div>
        <div className="card-discription" style={{overflow:'show'}}>

          <a href={html_url} style={{textDecoration:'none'}}>
            <p className="text-body" style={{cursor:'pointer', width:'200px'}}>  VISIT GITHUB  </p>
          </a>

          
          <p>Type : {type}</p> {/* Use customKey instead of key */}
        </div>

      </div>
      <button className="card-button" onClick={redirectToNewRoute} style={{ cursor: 'pointer' }}>VISIT PROFILE</button>


    </div>
  );
}


UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}


export default UserCard;
