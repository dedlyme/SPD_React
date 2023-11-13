import React from 'react';

function Quote({ text, author }) {
  return (
    <li>
      <h2>{author}</h2>
      <p>{text}</p>
    </li>
  );
}

export default Quote;



