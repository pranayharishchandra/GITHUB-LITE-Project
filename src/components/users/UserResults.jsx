import { useContext, useEffect, useState } from "react"
import UserCard from "../shared/usercards/UserCard";
import Spinner from "../shared/spinner/Spinner";
import GithubContext from "../context/github/GithubContext";

function UserResults() {

    const { users, loading, fetchUsers } = useContext(GithubContext);

    // const [users, setUsers] = useState([]); // it will be fetched from the API
    // const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchUsers();
    }, [])



    // async function fetchUsers() {
    //     // { headers: { Authorization: ... } }: This is the *CONFIGURATION OBJECT* passed to the fetch function
    //     // "Authorization" header: with a value that includes the word "token" followed by the GitHub access token.
    //     // The access token is taken from the REACT_APP_GITHUB_TOKEN environment variable. 
    //     // This token is used to authenticate the request and access GitHub's API.
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    //         headers: {
    //           Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    //         },
    //       });
          

    //     const data = await response.json(); // parsing the data fetched from the API to json
    //     console.log(data);

    //     setUsers(data);
    //     setLoading(false);
    // }

    if (loading) {
        // style not working
        return <Spinner style={{justifySelf:'center'}}/>
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
