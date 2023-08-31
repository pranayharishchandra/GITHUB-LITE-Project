import './UserCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
import { useContext } from 'react';


// function UserCard({ userName, customKey }) { // Rename the key prop to customKey
// user is the complete object about user being passed in UserResults.jsx
function UserCard({ user: { login, id, avatar_url, html_url } }) { // Rename the key prop to customKey
  const navigate = useNavigate();



  const { getUser } = useContext(GithubContext);

  async function redirectToNewRoute() {
    await getUser(login);
    navigate(`/user/${login}`);

  };


  // NOTE: we are not writing the keynames in string,
  return (
    <div className="card" style={{ width: '310px', height: '254px' }}>
      <div className="card-details">
        <div className='user-name-pic' style={{ width: '130%', margin: '-10%' }}>
          <img src={avatar_url} alt='' />
          <p className="text-title">{login}</p>

        </div>
        <div className="card-discription">
          <p className="text-body">Here are the details of the card</p>
          
          <p>key : {id}</p> {/* Use customKey instead of key */}
        </div>

      </div>
      <button className="card-button" onClick={redirectToNewRoute} style={{ cursor: 'pointer' }}>VISIT PROFILE</button>
      {/* <Link to={`/user/${login}`}>  <button className="card-button">VISIT PROFILE</button>  </Link> */}

    </div>
  );
}


UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}


export default UserCard;
