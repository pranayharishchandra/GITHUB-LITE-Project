import { useContext, useEffect, useState } from 'react';
import './Searchbox.css';
import Alert from '../../pages/Alert';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function SearchBox() {

    const [text, setText] = useState('');
    const { users, searchUsers, setUsers } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext)

    // let showAlert = false;
    // let msg = '';
    const [msg, setMsg] = useState('')
    const [showAlert, setShowAlert] = useState('')

    // useEffect(() => {
    //     setAlertMsg(msg);
    // },[showAlert])

    function setAlertMsg(alrtMsg) {
        setShowAlert(true);
        setMsg(alrtMsg);
        setTimeout(() => {
            setShowAlert(false);
            setMsg('')
        }, 3000);
    }

    function submiHandler(e) {
        e.preventDefault();

        searchUsers(text);

        // setText('')
        const specialChar = [',', ";", '"', '"', ' ', "=", '+', '-', '*', '@', '!', '#', '%', '&', "(", ")", '^']

        function hasSpecialCharacter(text) {
            return specialChar.some(char => text.includes(char));
        }

        // creating a contextfile, reducer file was not required in here, but just did that for learning

        // you can write 'pranay=' in the search and press enter, then go to react components extension
        // Alert.Provider, and there open hooks there you will see in 
        // hooks, them message will ve shown, but will get set to null after 3 seconds
        if (text === '') {
            // setAlert("Enter something");
            setAlertMsg("Enter something");
        } else if (hasSpecialCharacter(text)) {
            // setAlert('Username can not contain special characters');
            setAlertMsg('Username can not contain special characters');
            // but now to update the UI we will be requring to show a component, 
            // so made a alert component
            

        }







    }

    function clearHandler() {
        setUsers([]);
        setText('')
    }

    return (
        <div className='form-conatainer' style={{ margin: '50px' }}>
            <div className="alert-message">
                { showAlert && <Alert msg={msg} />}
            </div>
            <div className='clear-button-div'>
                {users.length > 0 && (<button className='clear-button' onClick={clearHandler} style={{ cursor: 'pointer' }}>Clear</button>)}
            </div>
            <form onSubmit={submiHandler} role="search">
                <label htmlFor="search">Search for stuff</label>

                <input id="search"
                    type="search"
                    placeholder="Search..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus required
                />

                <button className='submit-button' type="submit" style={{ cursor: 'pointer' }}>Go</button>

            </form>

        </div>
    )
}

export default SearchBox
