import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

function Metam() {
  // const meta = metamorfozy
  //   .sort(function (a, b) {
  //     return b.id - a.id;
  //   })
  //   .slice(0, 2)
  //   .map((data, index) => {
  //     return (
  //       <div className="metaArticle" key={index}>
  //         <div className="metaArticleImages">
  //           <img
  //             src=""
  //             alt="metamorfozaPrzed"
  //             data-aos="flip-right"
  //             data-aos-duration="2500"
  //             data-aos-once="true"
  //           />
  //           <img
  //             src=""
  //             alt="metamorfozaPo"
  //             data-aos="flip-left"
  //             data-aos-duration="2500"
  //             data-aos-once="true"
  //           />
  //         </div>
  //         <div
  //           className="metaContentCont"
  //           data-aos="fade-up"
  //           data-aos-duration="2500"
  //           data-aos-once="true"
  //         >
  //           <div className="metaNames">{data.imie}</div>
  //           <div className="metaTarget">
  //             <span className="metaA">osiągnęliśmy: </span>
  //             {data.osiagnieto}
  //           </div>
  //           <div className="metaDate">
  //             <span className="metaD">czas: </span>
  //             {data.czas}
  //           </div>
  //           <div className="metaDesc">{data.tekst}</div>
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <div className="metamorfozy">
      <div className="metaCont">
        <div className="metaHeader">Zobacz, komu już pomogłem!</div>
        <div className="metaArticlesCont">meta?</div>
      </div>
      <Link to="/metamorfozy#PMMeta">
        <div id="metaButton">
          WIĘCEJ METAMORFOZ
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </div>
      </Link>
    </div>
  );
}

export default Metam;
