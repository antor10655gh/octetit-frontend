import React from 'react';
import './PrimaryBtn.css';

const PrimaryBtn = ({ text }) => {
  return (
    <button className="primary-btn">
      <span>{text}</span>
    </button>
  );
};

export default PrimaryBtn;
