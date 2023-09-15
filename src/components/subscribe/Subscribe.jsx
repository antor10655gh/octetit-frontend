import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="mt-3">
      <input
        placeholder="Enter your email"
        class="input"
        name="email"
        type="email"
      />
      <button class="button">Subscribe</button>
    </div>
  );
};

export default Subscribe;
