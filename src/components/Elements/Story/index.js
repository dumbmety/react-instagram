import React from 'react';

import './index.css';

const Story = ({ size, src, text }) => {
  return (
    <div className="image">
      <div className={`image-wrapper w-${size} h-${size}`}>
        <img src={`/img/${src}`} alt={text} />
      </div>
    </div>
  );
};

export default Story;
