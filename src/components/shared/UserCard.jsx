import './UserCard.css';

function UserCard({ userName }) {
    return (
        <div className="card">
            <div className="card-details">
                <p className="text-title">{userName}</p>
                <p className="text-body">Here are the details of the card</p>
            </div>
            <button className="card-button">More info</button>
        </div>
    )
}

export default UserCard
