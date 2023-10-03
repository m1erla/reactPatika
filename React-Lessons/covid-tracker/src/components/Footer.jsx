import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='row footer'>
        <div className='col-4'></div>
        <div className='col-4 author'><span>by Furkan Karakus</span></div>
        <div className='col-4'>
            <div className='brands'>
                <a href="https://www.linkedin.com/in/furkan-karakus/" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/m1erla" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
               
    </div>
  )
}

export default Footer