import React, { useState } from 'react'
import previewStyle from '../css/preview.css'
import Alert from '../components/Alert'

export default function TextForm(props) {
    const [alert, setAlert] = useState(null);
    const [greyText, setGreyText] = useState("Grey Mode");
    const greyMode = (event) => {
        if (myStyle.color === 'black' || myStyle.color === 'white') {
            // if (myStyle.backgroundColor === '#192734') {

            //     document.getElementById("exampleFormControlTextarea1").style.backgroundColor = 'grey';
            // }
            setMyStyle({
                backgroundColor: 'grey'
            })
            document.body.style.backgroundColor = 'grey';
            document.getElementById("exampleFormControlTextarea1").style.backgroundColor = 'grey';
            setGreyText("Disable Grey Mode");
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            document.getElementById("exampleFormControlTextarea1").style.backgroundColor = 'white';
            document.body.style.backgroundColor = 'white';
            setGreyText("Grey Mode");

        }
    }

    const showAlert = (message, type) => {
        setAlert(
            {
                msg: message,
                type: type
            }
        )
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    )
    const [btnText, setBtnText] = useState("Dark Mode")
    const upperClick = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
    }
    const lowerClick = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
    }
    const textChange = (event) => {
        setText(event.target.value)
    }
    const clearClick = (event) => {
        // var conf= confirm('Do you want to clear the Text?');
        // if (conf == true) {
        //         setText("")
        //     }
        setText("")
    }

    const darkMode = (event) => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',

            })
            setBtnText("Dark Mode");
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been enabled", "success");
        }
        else {
            setMyStyle({
                color: 'white',
                // backgroundColor: 'black'
            })
            setBtnText("Light Mode");
            document.body.style.backgroundColor = '#192734';
            showAlert("Dark Mode has been enabled", "primary");
        }
    }
    const copy = () => {    
        navigator.clipboard.writeText(text);
    }
    const removeExtraSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");
    return (
        <div style={myStyle}>
            <form className='textArea'>
                <h1>{props.title}</h1>
                <div className="form-group">
                    <label htmlFor="text"> </label>
                    <textarea className="form-control" style={
                        {
                            backgroundColor: myStyle.color === 'white' ? '#192734' : 'white',
                            color: myStyle.color === 'white' ? 'white' : 'black'
                        }}
                        value={text} onChange={textChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
            </form>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={upperClick} >Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={clearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={lowerClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={copy}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
            <br />
            <button className="btn btn-primary my-3 mx-1" onClick={darkMode} >{btnText}</button>
            <button className="btn btn-primary my-3 mx-1" onClick={greyMode} >{greyText}</button>

            <Alert alert={alert} />


            <p>
                {text.split(/\s+/).length - 1} and {text.length} characters
            </p>
            <p>
                Estimate time require to read the above text is {((text.split(" ").length) / 125)} minutes
            </p>
            <p className="preview" style={{ previewStyle }}>
                {text.length > 0 ? text : "No preview available"}
            </p>

        </div >
    )
}
