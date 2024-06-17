import React, { useState } from 'react';

function Button() {
  // Initialize state with a starting number, e.g., 0
  const [number, setNumber] = useState(0);

  // Function to update the state when the button is clicked
  const handleClick = () => {
    setNumber(number + 1); // Increment the number by 1
  };

  // Render the button with the current number
  return (
    <button onClick={handleClick}>
      {number}
    </button>
  );
}

export default Button;
