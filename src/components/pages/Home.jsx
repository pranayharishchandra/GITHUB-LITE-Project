import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>

      <UserSearch />
      <UserResults />

    </div>
  );
}

export default Home;
