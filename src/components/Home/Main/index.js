import React from 'react';
import { Link } from 'react-router-dom';

import './story.css';

const Main = () => {
  return (
    <main className="w-8/12 pr-5">
      <section id="story-wrapper">
        <ul>
          <li className="story">
            <Link to="/">
              <div className="image">
                <div className="image-wrapper">
                  <img src="/img/users/russcodes.jpg" alt="russcodes" />
                </div>
              </div>
              <span className="username">russcodes</span>
            </Link>
          </li>
          <li className="story">
            <Link to="/">
              <div className="image">
                <div className="image-wrapper">
                  <img src="/img/users/onlysiamak.jpg" alt="onlysiamak" />
                </div>
              </div>
              <span className="username">onlysiamak</span>
            </Link>
          </li>
          <li className="story">
            <Link to="/">
              <div className="image">
                <div className="image-wrapper">
                  <img
                    src="/img/users/sepide_moqadasi.jpg"
                    alt="sepide_moqadasi"
                  />
                </div>
              </div>
              <span className="username">sepide_moqadasi</span>
            </Link>
          </li>
          <li className="story">
            <Link to="/">
              <div className="image">
                <div className="image-wrapper">
                  <img src="/img/users/ui.amjad.jpg" alt="ui.amjad" />
                </div>
              </div>
              <span className="username">ui.amjad</span>
            </Link>
          </li>
          <li className="story">
            <Link to="/">
              <div className="image">
                <div className="image-wrapper">
                  <img
                    src="/img/users/mehradhiddenofficial.jpg"
                    alt="mehradhiddenofficial"
                  />
                </div>
              </div>
              <span className="username">mehradhiddenofficial</span>
            </Link>
          </li>
          <li className="story">
            <Link to="/">
              <div className="image">
                <div className="image-wrapper">
                  <img src="/img/users/fazurrehman.jpg" alt="fazurrehman" />
                </div>
              </div>
              <span className="username">fazurrehman</span>
            </Link>
          </li>
          <li className="story">
            <Link to="/">
              <div className="image">
                <div className="image-wrapper">
                  <img src="/img/users/sajon.co.jpg" alt="sajon.co" />
                </div>
              </div>
              <span className="username">sajon.co</span>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <article>Post 1</article>
        <article>Post 2</article>
        <article>Post 3</article>
      </section>
    </main>
  );
};

export default Main;
