import React, { useState } from 'react'


export default function TextForm(props) {

    const handleLoClick = () => {  // LowerCase 
        // console.log("Upper Case was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUpClick = () => {   // upperCase 
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClearClick = () => {  // Clear 
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change is call");
        setText(event.target.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/); // regex
        setText(newText.join(" "));

    }

    ///////////////////////////////////        update's Below     /////////////////////////////////// 

    const handleTitleClick = () => {  // Titelcase 
        let newText = "";
        let check = 1;
        for (let i = 0; i < text.length; i++) {
            let c = text[i];
            if (check === 1) {
                if (c >= 'A' && c <= 'Z') { newText += c; check = 0; continue; }
                else {
                    // c= String.fromCharCode(c-32); // to perform num to char 
                    c = c.toUpperCase();
                }
                newText += c;
                check = 0;
            }
            else if (c === ' ') {
                check = 1;
                newText += ' ';
            }
            else {
                c = c.toLowerCase();
                newText += c;
            }
        }
        setText(newText);
    }
    const handleCopyText = () => {  // to copyText
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!","success");
        //   .then(() => alert('Text copied to clipboard!'))
        //   .catch((error) => alert('Failed to copy text:', error));
    };


    const handleDownloadText = () => { // download 
        props.showAlert("Downloading has been started...","success");
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'text-editor-content.txt';
        a.click();
        URL.revokeObjectURL(url); // Clean up the URL object after download
    };

    const handleReverseText = () => {   // Reverse Text 
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            let c = text[i];
            newText += c;

        }
        setText(newText);
    }



    ///////////////////////////////////        update's Above       /////////////////////////////////// 



    const [text, setText] = useState('');
    // const [text,setText]=useState('Enter text here');
    // text="new text ?" // wrong way  
    // In react use func to update value of text 
    // setText("new Text "); // Correct way

    return (
        <>
            <div > 
                <h1 className= {` my-2 text-${props.mode ===`dark`?`white`:`black`}`}>{props.heading}</h1>
                <div className="mb-3">
                    {/* <textarea className="form-control" value={text}  id="mybox" onChange={handleOnChange} rows="10" style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light'}} ></textarea> */}
                    <textarea  className= {`form-control text-${props.mode ===`dark`?`white`:`black`}`} value={text}  id="mybox" onChange={handleOnChange} rows="10" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}} ></textarea>
                </div>
                <button className="btn btn-danger my-2 text-white " onClick={handleClearClick} >Clear Text </button>
                <button className="btn btn-primary text-white my-2 mx-2" onClick={handleUpClick} >Convert to Uppercase </button>
                <button className="btn btn-success text-white my-2 " onClick={handleLoClick} >Convert to Lowercase </button>
                <button className="btn btn-warning text-white my-2  mx-2" onClick={handleTitleClick} >Convert to Titlecase </button>
                <button className="btn btn-primary text-white my-2 " onClick={handleReverseText} >Reverse Text </button>
                <button className="btn btn-secondary text-white my-2  mx-2 " onClick={handleExtraSpace} >Remove Extra Spaces </button>
                <button className="btn btn-info text-white my-2 " onClick={handleCopyText} >Click to Copy </button>
                <button className="btn btn-dark text-white my-2  mx-2" onClick={handleDownloadText} >Click to download</button>
            </div>
            {/* <div className=""  > */}
            <div  className= {`container my-3 text-${props.mode ===`dark`?`white`:`black`}`}  >
                <h3>Text Summary </h3>
                <p >{text.split(" ").length} words. {text.length} characters. {0.008 * text.split(" ").length} Minutes to read.  </p>
                 {/* <p>{0.008*text.split(" ").length} Minutes read </p>  */}
                <h4>Preview</h4>
                <p>{text.length>0?text:'Enter the text above to preview here ... '}</p>
            </div>


        </>
    );
}

