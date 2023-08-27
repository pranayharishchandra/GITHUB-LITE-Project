import { useContext, useState } from 'react';
import './Searchbox.css';
import GithubContext from '../../context/github/GithubContext';

function SearchBox() {

    const [ text, setText ] = useState('');
    const { users, searchUsers } = useContext(GithubContext);

    function submiHandler(e) {
        e.preventDefault();

        searchUsers(text);
        // setText('')
    }

    return (
        <div className='form-conatainer'>
            <div className='clear-button-div'>
                { users.length > 0 && (<button className='clear-button'>Clear</button>) }
            </div>         
            <form onSubmit={submiHandler} role="search">
                <label htmlFor="search">Search for stuff</label>

                <input id="search" 
                       type="search" 
                       placeholder="Search..." 
                       value={text}
                       onChange={ (e) => setText(e.target.value) }
                       autoFocus required />

                <button className='submit-button' type="submit" style={{cursor:'pointer'}}>Go</button>

            </form>
            
        </div>
    )
}

export default SearchBox
