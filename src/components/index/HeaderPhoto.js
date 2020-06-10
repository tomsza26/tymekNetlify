import React from 'react';

import NewMain from '../../images/newMain1.png';

function HeaderPhoto() {
  return (
    <div id="headerImgBack">
      <div id="headerImgContainer">
        <div
          id="headerTextContainer"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="headerImgTitle">Szukasz zmiany?</div>
          <div className="headerImgTitle">Dobrze trafiłeś!</div>
          <div className="headerImgText">
            Mam na imię Tymek i pomogę Ci osiągnąć wybrany cel!
          </div>
          <div className="headerImgText">
            Znajdziesz tutaj ogromną dawkę wiedzy, łatwo przystępną dla każdego.
            Koniecznie zajrzyj do sekcji <span id="blogColor"> BLOG</span>.
          </div>
          <div className="headerImgText">
            Chcesz zrzucić zbędne kilogramy? A może przybrać na masie mięśniowej
            i sile?
          </div>
          <div className="headerImgText">
            Odezwij się do mnie, umówimy się na trening lub przedyskutujemy
            Twoje cele poprzez konsultację on-line.
          </div>
          <div className="headerImgText">Pierwszy krok należy do Ciebie!</div>
        </div>
        <img
          id="headerImg"
          src={NewMain}
          alt="slider"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-once="true"
        />
      </div>
    </div>
  );
}

export default HeaderPhoto;
