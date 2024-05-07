"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/success')
      .then(response => response.json())  // Parse the JSON from the response
      .then(data => setMessage(data.message))  // Set the message state
      .catch(error => console.error('Error fetching data:', error));  // Handle errors
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
