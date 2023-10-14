import React from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  )
}

Textform.propTypes = {
    heading : PropTypes.string
}

Textform.defaultProps = {
    heading : "Description of field below"
}


