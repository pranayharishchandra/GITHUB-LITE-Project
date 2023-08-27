import { useContext } from "react"
// import { useContext, useEffect, useState } from "react"
import UserCard from "../shared/usercards/UserCard";
import Spinner from "../shared/spinner/Spinner";
import GithubContext from "../context/github/GithubContext";

function UserResults() {

    // const { users, loading, fetchUsers } = useContext(GithubContext);
    const { users, loading  } = useContext(GithubContext);

    // const [users, setUsers] = useState([]); // it will be fetched from the API
    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     fetchUsers();
    // }, [])



    // async function fetchUsers() { }

    if (loading) {
        // style not working
        return <Spinner style={{margin:'auto'}}/>
    }




    // users : array of objects
    return (
        <div className="users-container">
            {users.map((user) => (
                // <h3 className="user">{user.login}</h3>
                <UserCard 
                    className="user" 
                    // userName={user.login} 
                    // customKey={user.id} 
                    user={user}
                    key={user.id} 
                    />
            ))}
            
        </div>
    )
}

export default UserResults
