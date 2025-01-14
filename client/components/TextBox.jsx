import React, { useState } from 'react';

const TextBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>You entered: {value}</p>
    </div>
  );
}

export default TextBox;