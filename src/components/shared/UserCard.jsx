import './UserCard.css';

function UserCard({ userName, customKey }) { // Rename the key prop to customKey
  return (
    <div className="card">
      <div className="card-details">
        <p className="text-title">{userName}</p>
        <p className="text-body">Here are the details of the card</p>
        <p>key : {customKey}</p> {/* Use customKey instead of key */}
      </div>
      <button className="card-button">More info</button>
    </div>
  );
}

export default UserCard;
