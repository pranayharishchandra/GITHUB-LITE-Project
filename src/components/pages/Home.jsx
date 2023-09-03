import SearchBox from "../shared/search/SearchBox";
import UserResults from "../users/UserResults";
// import UserSearch from "../users/UserSearch";


function Home() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}}>

      <SearchBox />
      <UserResults />

    </div>
  );
}

export default Home;
