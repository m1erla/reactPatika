import React from 'react'
import { marked } from 'marked'
import { useDispatch, useSelector } from 'react-redux'
import { userTextChange } from '../redux/markdownSlice'
function Preview() {
    const dispatch = useDispatch();
    const clicked = useSelector((state) => state.markdown.clickHelp);
    const userText = useSelector((state) => state.markdown.userText);
    const helpText = useSelector((state) => state.markdown.helpText);

    const handleChange = (e) => {
        dispatch(userTextChange(e));
    }


    const createMarkUp = (text) => {
        return { __html: marked(text)};
    }
  return (
    <div className='preview'>
        <textarea readOnly={clicked} value={clicked ? helpText : userText} onChange={(e) => handleChange(e.target.value)}></textarea>
        <div dangerouslySetInnerHTML={createMarkUp(clicked ? helpText : userText)} className='right-area'></div>

    </div>
  )
}

export default Preview