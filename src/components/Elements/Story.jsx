import PropTypes from 'prop-types';

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
      <div
        className="bg-white p-0.5 rounded-full"
        style={{ width: size, height: size }}
      >
        <img
          className="w-full h-full object-cover rounded-full"
          src={`/img/${src}`}
          alt={text}
        />
      </div>
    </div>
  );
};

Story.propTypes = {
  status: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string
};

export default Story;
