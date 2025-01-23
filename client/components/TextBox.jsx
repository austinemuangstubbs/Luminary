import React, { useContext } from 'react';
import { Context } from './App';

const TextBox = () => {
  
  const { inputText,setInputText } = useContext(Context)
  const { templateConfig, setTemplateConfig } = useContext(Context)
  const { toggleStyle } = useContext(Context);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };


  

  async function illuminateCall (message,language) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    toggleStyle();
    console.log("illuminateCall triggered")
    try {
      const response = await fetch("http://localhost:3000/v1/illuminate", {
          method: "POST",
          body: JSON.stringify({ 
          "message": message,
          "language": language
         }),
         headers: myHeaders,
      });
      const data = await response.json();
      setInputText(data.translation);
    } catch (error) {
      console.error("Error during illumination:", error);
    } finally {
      toggleStyle();
    }
  }



  return (
    <div className='textBoxContainer'>
      <h2>Text</h2>
      <textarea className='textView' value={inputText} onChange={handleChange} />
      <div className='buttonContainer'>
        <button className='minorButton' onClick={()=>{ setInputText('') }}>Clear</button>
        <button className='minorButton' onClick={()=>{ illuminateCall(inputText,templateConfig.language) }}>Illuminate ✨</button>
      </div>
    </div>
  );
}

export default TextBox;