import React, { useContext } from 'react';
import { Context } from './App';

const TextBox = () => {
  
  const { inputText,setInputText } = useContext(Context)
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className='textBoxContainer'>
      <h2>Text</h2>
      <textarea className='textView' value={inputText} onChange={handleChange} />
      <button className='majorButton'>Illuminate ✨</button>
    </div>
  );
}

export default TextBox;