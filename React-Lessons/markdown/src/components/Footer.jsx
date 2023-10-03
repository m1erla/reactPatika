import React from 'react'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <div className='footer'>
          <a href="" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='3x'/>
          </a>
          <a href=""></a>
          <a href=""></a>

    </div>
  )
}

export default Footer