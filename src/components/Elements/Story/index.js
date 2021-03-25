import React from 'react';

import './index.css';

const Story = ({ state, size, src, text }) => {
  let imageBackground;
  switch (state) {
    case 'unseen':
      imageBackground = 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600';
      break;
    case 'seen':
      imageBackground = 'bg-gray-200';
      break;
    default:
      imageBackground = 'bg-transparent';
      break;
  }

  return (
    <div className={`image ${imageBackground}`}>
      <div className={`image-wrapper w-${size} h-${size}`}>
        <img src={`/img/${src}`} alt={text} />
      </div>
    </div>
  );
};

export default Story;
