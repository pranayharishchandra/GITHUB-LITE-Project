
// RepoList.jsx is below component of User.jsx,.. it's basically continuation of it
// so in this case we are passing getRepos as props from RepoList.jsx to User.jsx


import PropTypes from 'prop-types';
import { PiFolderUserBold } from 'react-icons/pi'
import { BsLink45Deg } from "react-icons/bs";

import './repo.css'


function RepoList({ repos }) {






  return (
    <div className="repo-section-container">
      <div className="heading">
        {`${repos.length}`} LATEST REPOSITORIES
      </div>

      <div className='repo-list-container'>
        {
          repos.map((repo) => (
            <a href={repo.html_url} style={{ textDecoration: 'none', color: 'black' }} >
              <div className='repo-list-items'>
                <div className='repo-icon'> <PiFolderUserBold color='aqua' /> </div>
                <div className='flex-col'>
                  <div className='repo-name'> 
                    {`${repo.name.toUpperCase()}`} 
                    <BsLink45Deg className='link-icon' />
                  </div>

                  {/* <div className='repo-icon repo-icon-open'> <MdOpenInNew color='blue' /> </div> */}
                  {repo.description && <div className='repo-item-discripition'> {`${repo.description.toLowerCase()}`} </div>}
                </div>
              </div>
            </a>
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















