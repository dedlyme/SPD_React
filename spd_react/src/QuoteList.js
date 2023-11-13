import React from 'react';
import Quote from './Quote';

function QuoteList({ quotes }) {
  if (!Array.isArray(quotes)) {
    return <p>Nav citātu datu</p>;
  }

  return (
    <div>
      <h2>Quotes List</h2>
      <ul>
        {quotes.map((quote) => (
          <Quote key={quote.id} text={quote.quote} author={quote.author} />
        ))}
      </ul>
    </div>
  );
}

export default QuoteList;