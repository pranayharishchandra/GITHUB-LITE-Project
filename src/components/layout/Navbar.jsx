import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
    return (
        <nav className='navbar'>
            <div className="github">
                <FaGithub style={{margin:'10px'}}/>
                GITHUB
            </div>
            <div className="nav-contents">
                    <Link className='link' to='/home'> HOME </Link>
                    <Link className='link' to='/about'> ABOUT </Link>


            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'GitHub Finder',

}

Navbar.propTypes = {
    title: PropTypes.string,

}



export default Navbar
