import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiBookmarkLine,
  RiChat3Line,
  RiHeart3Line,
  RiSendPlaneLine,
  RiMoreFill,
  RiEmotionHappyLine
} from 'react-icons/ri';

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
          <RiMoreFill size="1.2rem" />
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
              <RiHeart3Line size="1.5rem" />
            </button>
            <button className="post__action">
              <RiChat3Line size="1.5rem" />
            </button>
            <button className="post__action">
              <RiSendPlaneLine size="1.5rem" />
            </button>
          </div>
          <button className="post__action">
            <RiBookmarkLine size="1.5rem" />
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
          <RiEmotionHappyLine size="1.5rem" />
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
