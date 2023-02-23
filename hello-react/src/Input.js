import React, { useState } from 'react';

const Input = () => {
  const [txtValue, setTextValue] = useState('');

  const onChangee = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChangee} />
      <br />
      <p>{txtValue} </p>
    </div>
  );
};

export default Input;
