import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="mt-3">
      <input
        placeholder="Enter your email"
        className="input"
        name="email"
        type="email"
      />
      <button className="button">Subscribe</button>
    </div>
  );
};

export default Subscribe;
