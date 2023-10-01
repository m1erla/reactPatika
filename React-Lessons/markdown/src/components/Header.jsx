import React from 'react'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { clickHelpChangne } from '../redux/markdownSlice'
function Header() {
    const dispatch = useDispatch();

  return (
    <div className='header'>
          <h1>Markdown Preview</h1>
          <button onClick={() => dispatch(clickHelpChangne())}>
                <FontAwesomeIcon icon={faQuestion} size='2x'/>

          </button>

    </div>
  )
}

export default Header