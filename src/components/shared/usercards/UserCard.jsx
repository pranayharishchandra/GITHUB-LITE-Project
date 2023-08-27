import './UserCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// function UserCard({ userName, customKey }) { // Rename the key prop to customKey
// user is the complete object about user being passed in UserResults.jsx
function UserCard({user : { login, id, avatar_url, html_url  }}) { // Rename the key prop to customKey
  // NOTE: we are not writing the keynames in string,
  return (
    <div className="card">
      <div className="card-details">
        <div className='user-name-pic'>
          <img src={avatar_url} alt=''/>
          <p className="text-title">{login}</p>

        </div>
        <p className="text-body">Here are the details of the card</p>
        <p>key : {id}</p> {/* Use customKey instead of key */}
      </div>
      <Link to={html_url}><button className="card-button">GITHUB</button></Link>
      
    </div>
  );
}


UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}


export default UserCard;
