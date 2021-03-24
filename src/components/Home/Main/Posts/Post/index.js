import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEllipsis } from 'react-icons/ai';
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoShareSocialOutline
} from 'react-icons/io5';

const Post = ({ name, username, imgName, likes, time }) => {
  return (
    <article className="bg-white rounded border border-gray-200 mb-5">
      <header className="py-2 px-5 border-b border-gray-200 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 mr-2 rounded-full">
            <div className="bg-white p-0.5 rounded-full">
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={`/img/users/${username}.jpg`}
                alt={name}
              />
            </div>
          </div>
          <span className="font-semibold text-sm hover:underline">
            {username}
          </span>
        </Link>
        <button className="focus:outline-none">
          <AiOutlineEllipsis size="1.5rem" />
        </button>
      </header>
      <div>
        <img
          className="w-full h-full object-cover"
          src={`/img/posts/${username}/${imgName}.jpg`}
          alt="Dashboard"
        />
      </div>
      <footer className="py-2 px-5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="flex items-center focus:outline-none">
              <IoHeartOutline size="1.5rem" />
            </button>
            <button className="flex items-center focus:outline-none">
              <IoChatbubbleOutline size="1.5rem" />
            </button>
            <button className="flex items-center focus:outline-none">
              <IoShareSocialOutline size="1.5rem" />
            </button>
          </div>
          <div>
            <button className="flex items-center focus:outline-none">
              <IoBookmarkOutline size="1.5rem" />
            </button>
          </div>
        </div>
        <Link to="/" className="block font-semibold text-sm">
          {likes} likes
        </Link>
        <Link
          to="/"
          className="text-gray-400 uppercase"
          style={{ fontSize: '10px' }}
        >
          {time}
        </Link>
      </footer>
      <form className="flex items-center justify-between p-5 border-t border-gray-200">
        <button type="button" className="focus:outline-none">
          <IoHappyOutline size="1.5rem" />
        </button>
        <input
          className="flex-1 ml-3 leading-relaxed focus:outline-none"
          type="text"
          placeholder="Add a comment..."
        />
        <button type="submit" className="text-lightBlue-500 font-semibold">
          Post
        </button>
      </form>
    </article>
  );
};

export default Post;
