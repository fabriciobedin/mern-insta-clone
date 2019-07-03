import React, { Component } from "react";

import "./Feed.css";

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className='user-info'>
              <span>Fabricio Bedin</span>
              <span className="place">Passo Fundo</span>
            </div>

            <img src={more} alt="Mais" />
          </header>
          <img src="http://localhost:3333/files/foto.jpg"/>

          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="Comment" />
              <img src={send} alt="Send" />
            </div>
            <strong>984798 curtidas</strong>
            <p>Primeira foto postada \o/
              <span>#react #nodejs #react-native</span>
            </p>
          </footer>
        </article>

      </section>
    );
  }
}

export default Feed;
