import { useContext, useState } from 'react';
import './Searchbox.css';
import GithubContext from '../../context/github/GithubContext';

function SearchBox() {

    const [text, setText] = useState('');
    const { users, searchUsers, setUsers } = useContext(GithubContext);

    function submiHandler(e) {
        e.preventDefault();

        searchUsers(text);
        // setText('')
    }
    
    function clearHandler() {
        setUsers([]);
        setText('')
    }

    return (
        <div className='form-conatainer' style={{ margin: '50px' }}>
            <div className='clear-button-div'>
                {users.length > 0 && (<button className='clear-button' onClick={clearHandler} style={{cursor:'pointer'}}>Clear</button>)}
            </div>
            <form onSubmit={submiHandler} role="search">
                <label htmlFor="search">Search for stuff</label>

                <input id="search"
                    type="search"
                    placeholder="Search..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus required />

                <button className='submit-button' type="submit" style={{ cursor: 'pointer' }}>Go</button>

            </form>

        </div>
    )
}

export default SearchBox
