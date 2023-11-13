import React, { useEffect, useState } from 'react';
import QuoteList from './QuoteList';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        const data = await response.json();

        console.log('Data from API:', data);

        if (data && data.quotes && Array.isArray(data.quotes)) {
          setQuotes(data.quotes);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Quotes App</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;