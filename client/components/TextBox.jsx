import React, { useState } from 'react';

const TextBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h2>Text</h2>
      <textarea className='textView' value={value} onChange={handleChange} />
    </div>
  );
}

export default TextBox;