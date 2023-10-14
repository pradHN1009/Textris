import React,{ useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text,setText] = useState("Enter Text here")
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}

Textform.propTypes = {
    heading : PropTypes.string
}

Textform.defaultProps = {
    heading : "Description of field below"
}


