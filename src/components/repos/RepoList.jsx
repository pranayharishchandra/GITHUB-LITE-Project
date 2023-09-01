
// RepoList.jsx is below component of User.jsx,.. it's basically continuation of it
// so in this case we are passing getRepos as props from RepoList.jsx to User.jsx


import PropTypes from 'prop-types';
import { PiFolderUserBold } from 'react-icons/pi'

import './repo.css'


function RepoList({ repos }) {






  return (
    <div className="repo-section-container">
      <div className="heading">
          LATEST REPOSITORIES
      </div>

      <div className='repo-list-container'>
        {
          repos.map((repo) => (
            <div className='repo-list-items'>
              <div className='repo-icon'> <PiFolderUserBold color='red'/> </div>
              <div className='repo-name'> {`  ${repo.name}`} </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}






RepoList.propTypes = {
  repos: PropTypes.array.isRequired,

}



export default RepoList















