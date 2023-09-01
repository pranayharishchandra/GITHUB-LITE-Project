import { FaGithub } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
    const navigate = useNavigate();

    function githubClickHandler (e) {
        navigate("/");
    }


    return (
        <nav className='navbar' >

            <div className="github" onClick={githubClickHandler} style={{cursor:'pointer'}}>
                <FaGithub style={{ fontSize:'40px', marginRight:'6px'}}/>
                <h4 style={{fontFamily:'arial', wordSpacing: '90px', fontWeight:'500'}}> GITHUB-LITE </h4>
            </div>

            <div className="nav-contents">
                    <Link className='link' to='/home' > HOME </Link>
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
