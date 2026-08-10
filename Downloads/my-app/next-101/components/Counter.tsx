'use client'; 

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 items-center">
      <button 
        className="cursor-pointer bg-red-500 p-2 text-white rounded"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>

      <span>{count}</span>

      <button 
        className="cursor-pointer bg-green-500 p-2 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;