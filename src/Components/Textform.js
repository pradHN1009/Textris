import React,{ useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text,setText] = useState("")
    const [speechToggle, setSpeechToggle] = useState("Speak")
    const handleUpClick = () => {
        if(text.length>0)
        {   
            setText(text.toUpperCase());
            props.alertFunc("String converted to Upper Case", "success")
        }
        else
        {
            props.alertFunc("Enter something to convert to uppercase", "warning")
        }
        
    }
    const handleLoClick = () => {
        if(text.length>0){
            setText(text.toLowerCase());
            props.alertFunc("String converted to Lower Case", "success")
        }
        else
        {
            props.alertFunc("Enter something to convert to lowercase", "warning")
        }
    }
    const handleClearClick = (event) => {
        if(text.length>0){
            setText("");
            props.alertFunc("Cleared", "success")
        }
        else
        {
            props.alertFunc("Nothing to clear", "warning")
        }
    }
    const handleCopy = () => {
        if(text.length>0){
            let copyText = document.getElementById("exampleFormControlTextarea1")
            copyText.select()
            navigator.clipboard.writeText(copyText.value);
            props.alertFunc("String copied to clipboard", "success")
        }
        else
        {
            props.alertFunc("Nothing to copy", "warning")
        }
    }
    const speak = () => {
        if(text.length>0){
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
        else
        {
            props.alertFunc("Nothing to speak", "warning")
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    let wordLength = text.split(" ");
    let finalWordLength = wordLength.filter((item => {
        if(item != "")
            return item
    }))
    return (
        <>
        <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <div className="mb-3"> 
                <h2 className='my-3'>{props.heading}</h2>
                <textarea className="form-control" style={{backgroundColor : props.mode === "light" ? "white" : "#2b2b2d", color: props.mode === "light" ? "black": "white", border: "1px solid black" }} value={text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <div className="row">
            <button className="btn btn-primary mx-2 my-1 col-sm-11 col-md-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1 col-sm-11 col-md-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1 col-sm-11 col-md-2" id = "toggleSpeak" onClick={speak}>{speechToggle}</button>
            <button className="btn btn-primary mx-2 my-1 col-sm-11 col-md-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 my-1 col-sm-11 col-md-2" onClick={handleClearClick}>Clear text</button>
            </div>
        </div>
        <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <h2>Text Summary</h2>
            <p>
                {finalWordLength.length} Words, {text.length} characters
            </p>
            <p>
                {finalWordLength.length * 0.0033} minutes to read this for an average reader
            </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>

        </>
    )
}

Textform.propTypes = {
    heading : PropTypes.string,
    mode : PropTypes.string,
    alertFunc : PropTypes.func
}

Textform.defaultProps = {
    heading : "Description of field below",
    mode : "light",
    alertFunc : () =>{}
}


