import './UserCard.css';

import  PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';



// user is the complete object about user being passed in UserResults.jsx

// function UserCard({ user: { login, id, avatar_url, html_url } }) { // Rename the key prop to customKey
function UserCard ({ user }) { 
  const navigate = useNavigate();

  const { login, type, avatar_url, html_url } = user;

  // const { getUser } = useContext(GithubContext);

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
