import './UserCard.css';
import PropTypes from 'prop-types';

// function UserCard({ userName, customKey }) { // Rename the key prop to customKey
function UserCard({user : { login, id, avatar_url  }}) { // Rename the key prop to customKey
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
      <button className="card-button">More info</button>
    </div>
  );
}


UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}


export default UserCard;
