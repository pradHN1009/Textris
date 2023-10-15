import React,{ useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text,setText] = useState("")
    const [speechToggle, setSpeechToggle] = useState("Speak")
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const handleClearClick = (event) => {
        setText("");
    }
    const handleCopy = () => {

        let copyText = document.getElementById("exampleFormControlTextarea1")
        copyText.select()
        navigator.clipboard.writeText(copyText.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        if(speechToggle == "Speak")
            setSpeechToggle("Stop");
        else
        {
            setSpeechToggle("Speak")
            window.speechSynthesis.cancel()
        }
        msg.onend = (event) => {
            setSpeechToggle("Speak")
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    let wordLength = text.split(" ");
    return (
        <>
        <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <div className="mb-3"> 
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor : props.mode === "light" ? "white" : "#2b2b2d", color: props.mode === "light" ? "black": "white", border: "1px solid black" }} value={text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" id = "toggleSpeak" onClick={speak}>{speechToggle}</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <h2>Text Summary</h2>
            <p>
                {wordLength.length} Words, {text.length} characters
            </p>
            <p>
                {wordLength.length * 0.0033} minutes to read this for an average reader
            </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
        </div>

        </>
    )
}

Textform.propTypes = {
    heading : PropTypes.string
}

Textform.defaultProps = {
    heading : "Description of field below"
}


