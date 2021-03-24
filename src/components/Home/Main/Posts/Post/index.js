import React from 'react';
import { Link } from 'react-router-dom';
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoEllipsisHorizontalSharp,
  IoHappyOutline,
  IoHeartOutline,
  IoShareSocialOutline
} from 'react-icons/io5';

import './index.css';

const Post = ({ name, username, imgName, likes, time }) => {
  return (
    <article className="post">
      <header className="post__header">
        <Link to="/" className="post__account">
          <div className="image">
            <div className="image__wrapper">
              <img src={`/img/users/${username}.jpg`} alt={name} />
            </div>
          </div>
          <span className="post__username">{username}</span>
        </Link>
        <button className="post__menu">
          <IoEllipsisHorizontalSharp size="1.2rem" />
        </button>
      </header>
      <div>
        <img
          className="post__image"
          src={`/img/posts/${username}/${imgName}.jpg`}
          alt="Dashboard"
        />
      </div>
      <footer className="post__footer">
        <div className="post__actions">
          <div className="post__actions--left">
            <button className="post__action">
              <IoHeartOutline size="1.5rem" />
            </button>
            <button className="post__action">
              <IoChatbubbleOutline size="1.5rem" />
            </button>
            <button className="post__action">
              <IoShareSocialOutline size="1.5rem" />
            </button>
          </div>
          <button className="post__action">
            <IoBookmarkOutline size="1.5rem" />
          </button>
        </div>
        <Link to="/" className="post__likes">
          {likes} likes
        </Link>
        <Link to="/" className="post__time">
          {time}
        </Link>
      </footer>
      <form className="addComment">
        <button type="button" className="addComment__emoji">
          <IoHappyOutline size="1.5rem" />
        </button>
        <input
          type="text"
          className="addComment__message"
          placeholder="Add a comment..."
        />
        <button type="submit" className="addComment__send">
          Post
        </button>
      </form>
    </article>
  );
};

export default Post;
