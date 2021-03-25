import React from 'react';

const Story = ({ status, size, src, text }) => {
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
    <div className={`p-0.5 rounded-full ${imageBackground}`}>
      <div className={`bg-white p-0.5 rounded-full w-${size} h-${size}`}>
        <img
          className="w-full h-full object-cover rounded-full"
          src={`/img/${src}`}
          alt={text}
        />
      </div>
    </div>
  );
};

export default Story;
