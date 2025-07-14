import React, {useState} from 'react'

export default function TextForm(props) {

    //Uppercase
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upercase", "success")
      }
    //Lowercase
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
      }

    //Capitalizedcase
    const handleCapClick = ()=>{
        let newText = text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
        setText(newText);
        props.showAlert("Capitalized","success")
      }

      //Copy text
      const handleCopyClick = () => {
        navigator.clipboard.writeText(text);props.showAlert("Text copied to clipboard!", "success");
};


    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }


    const[text, setText] = useState('Enter text here');
    //text="new text"; Wrong way to change the text
    //setText("new text"); Correct Way to change the state
    return (
        <>
         <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 mb-4>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#3c6180ff':'white', color:props.mode === 'dark'?'white':'#042743'}}></textarea>
         </div>
         <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Uppercase</button>

         <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Lowercase</button>
         
         <button className="btn btn-primary mx-2 my-1" onClick={handleCapClick}>Capitalized Case</button>

         <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>


         </div>


         <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>

            <p>{text.trim().split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>

            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>

            <p>{text.length>0?text:"Enter something to preview"}</p>
         </div>

         </>
         )
        }
