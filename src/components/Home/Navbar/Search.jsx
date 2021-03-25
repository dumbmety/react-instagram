import React from 'react';

const Search = ({ hide, open, show }) => {
  let content;
  if (open) {
    content = (
      <div id="search-open" className="flex justify-center w-8/12 relative">
        <svg
          aria-label="Search &amp; Explore"
          className="absolute left-3 text-gray-400"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          fill="#A1A1AA"
          height="0.7rem"
          viewBox="0 0 48 48"
          width="0.7rem"
        >
          <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z"></path>
          <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
        </svg>
        <button
          className="absolute right-2 text-gray-400"
          onClick={hide}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg
            className="absolute right-0 text-gray-400"
            fill="currentColor"
            height="0.9rem"
            strokeWidth="0"
            stroke="currentColor"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            viewBox="0 0 24 24"
            width="0.9rem"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"></path>
            </g>
          </svg>
        </button>
        <input
          className="bg-gray-50 text-sm px-7 border border-gray-200 py-0.5 px-3 rounded w-full h-7 focus:outline-none"
          placeholder="Search"
          ref={element => element && element.focus()}
          type="text"
        />
      </div>
    );
  } else {
    content = (
      <div
        id="search-close"
        onClick={show}
        className="w-8/12 flex justify-center relative select-none cursor-text"
      >
        <div
          id="search-close-wrapper"
          className="absolute flex items-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg
            aria-label="Search"
            className="text-gray-400"
            fill="#A1A1AA"
            height="0.7rem"
            viewBox="0 0 48 48"
            width="0.7rem"
          >
            <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z"></path>
            <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
          </svg>
          <span className="text-sm ml-1 text-gray-400">Search</span>
        </div>
        <div
          id="search-close-background"
          className="w-full bg-gray-50 border border-gray-200 py-0.5 px-3 rounded w-9/12 h-7"
        />
      </div>
    );
  }

  return <div className="flex flex-1 justify-center">{content}</div>;
};

export default Search;
