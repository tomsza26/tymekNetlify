import React from 'react';
import { Link } from 'gatsby';

import AboutMeJpg from '../../images/aboutMeCircle.png';

function AboutMe() {
  return (
    <article id="aboutMe">
      <div id="aboutMeContainer">
        <div
          id="aboutMeTextContainer"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-once="true"
        >
          <div id="aboutMeName">Tymek Nowak</div>
          <div id="aboutMeTrener">TRENER PERSONALNY</div>
          <img id="aboutPic1" src={AboutMeJpg} alt="about" />
          <div id="aboutMeContent">
            Cześć! Jak mogliście zauważyć, jestem pasjonatem sportu. Od ponad 9
            lat pogłębiam wiedzę o treningach, żywieniu oraz podejściu mentalnym
            w tych dziedzinach. Od trzech lat pracuje w branży jako trener.
            Przez ten czas współpracowałem z dużą ilością osób i większość z
            nich osiągnęła swoje cele! Powstanie tej strony pozwala mi znacznie
            zwiększyć doświadczenie. Wiąże się z tym dopracowanie moich metod
            aby były jeszcze bardziej skuteczne. Od zawsze sport w moim życiu
            grał ważną rolę. Jeśli jesteś ciekawy jakie dyscypliny uprawiałem i
            jak zaczynałem pracę jako trener, wystarczy, że klikniesz poniższy
            przycisk.
          </div>
          <Link to="/oMnie#aboutContainer">
            <div href="" id="aboutMeButton">
              CZYTAJ WIĘCEJ
            </div>
          </Link>
        </div>
        <img
          id="aboutPic2"
          src={AboutMeJpg}
          alt="about"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-once="true"
        />
      </div>
    </article>
  );
}

export default AboutMe;
