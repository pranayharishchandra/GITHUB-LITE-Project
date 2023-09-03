import { useContext } from "react"
// import { useContext, useEffect, useState } from "react"
import UserCard from  "../shared/usercards/UserCard";
import Spinner  from "../shared/spinner/Spinner";
import GithubContext from "../context/github/GithubContext";

function UserResults() {

    const { users, loading  } = useContext(GithubContext);
    
    
    /**SHIFTED  async function fetchUsers() { } to GithubContext page
   
     
    const [users, setUsers] = useState([]); // it will be fetched from the API
    const [loading, setLoading] = useState(true);

    const { users, loading, fetchUsers } = useContext(GithubContext);
    
    useEffect(() => {
            fetchUsers();
        }, [])
        
        
    async function fetchUsers() { }
    */

    if (loading) {
        return <Spinner style={{margin:'auto'}}/>
    }




    // users : array of objects
    return (
        <div className="users-container">
            {users.map((user) => (
                <UserCard 
                           className="user" 
                           user={user}
                           key={user.id} // eslint-disable-next-line react/no-array-index-key
                    />

            ))}
            
        </div>
    )
}

export default UserResults
