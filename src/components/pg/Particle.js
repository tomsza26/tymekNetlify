import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Particle() {
  return (
    <div className="PCont" id="PMAtricle">
      {/* {articles
        .filter((x) => {
          let path = document.location.pathname;
          return x.id === parseInt(path.substring(path.lastIndexOf('/') + 1));
        })
        .map((data, index) => {
          document.title = `${data.nazwa} - Pakuj z Tymkiem`;
          return (
            <div className="PInner" id="Particle" key={index}>
              <div
                className="PHeader"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                {data.nazwa}
              </div>
              <div
                className="ParticleTextCont"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <div className="ParticleCate">{data.kategoria}</div>
                <div className="ParticleDate">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
                </div>
                <img
                  src={require(`../content/articleImages/${data.obraz}`)}
                  alt="articleP"
                  className="ParticleImg1"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                />
                <div className="ParticleText">
                  <pre>{data.tekst}</pre>
                </div>
              </div>
              <img
                src={require(`../content/articleImages/${data.obraz}`)}
                alt="articleP"
                className="ParticleImg2"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
              />
            </div>
          );
        })} */}
    </div>
  );
}

export default Particle;
