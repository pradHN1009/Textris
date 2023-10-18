import React from 'react'
import PropTypes from 'prop-types'
function About(props) {
  return (
    <div className = "row">
        <div className={`col-12 text-${props.mode==="dark"?"light":"black"}`}><p>This is a simple app that lets you perform some operations on text entered. You can convert the text to uppercase or lowecase, you can recite the text entered, or copy it as well. This app supports dark mode as well to ease your eye strain.</p>    </div>
    </div>
  )
}

About.propTypes = {
    mode : PropTypes.string
}
About.defaultProps = {
    mode : "light"
}

export default About