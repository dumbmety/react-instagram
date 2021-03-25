import React from 'react';

import './index.css';

const Story = ({ status, size, src, text }) => {
  const imageWidth = `w-${size}`;
  const imageHeight = `h-${size}`;

  let imageBackground;
  switch (status) {
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
      <div className={`image-wrapper ${imageWidth} ${imageHeight}`}>
        <img src={`/img/${src}`} alt={text} />
      </div>
    </div>
  );
};

export default Story;
