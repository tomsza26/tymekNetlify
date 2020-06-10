import React from 'react';
import { Helmet } from 'react-helmet';

function Pmetamorfozy() {
  // let meta = metamorfozy
  //   .sort(function (a, b) {
  //     return b.id - a.id;
  //   })
  //   .map((data, index) => {
  //     return (
  //       <div className="PmetaArticle" key={index}>
  //         <div className="PmetaImages">
  //           <img
  //             src={require(`../content/metaImages/${data.obrazPrzed}`)}
  //             alt="metamorfozaPrzed"
  //             data-aos="flip-right"
  //             data-aos-duration="2500"
  //             data-aos-once="true"
  //           />
  //           <img
  //             src={require(`../content/metaImages/${data.obrazPo}`)}
  //             alt="metamorfozaPo"
  //             data-aos="flip-left"
  //             data-aos-duration="2500"
  //             data-aos-once="true"
  //           />
  //         </div>
  //         <div
  //           className="PmetaContentCont"
  //           data-aos="fade-up"
  //           data-aos-duration="2500"
  //           data-aos-once="true"
  //         >
  //           <div className="PmetaNames">{data.imie}</div>
  //           <div className="PmetaTarget">
  //             <span className="PmetaA">osiągnęliśmy: </span>
  //             {data.osiagnieto}
  //           </div>
  //           <div className="PmetaDate">
  //             <span className="PmetaD">czas: </span>
  //             {data.czas}
  //           </div>
  //           <div className="PmetaDesc">{data.tekst}</div>
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <>
      <Helmet title="Metamorfozy - Pakuj z Tymkiem" />
      <div className="PCont" id="PMMeta">
        <div className="PInner" id="PmetaCont">
          <div
            className="PHeader"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            METAMORFOZY
          </div>
          <div className="PmetaArticlesCont">meta</div>
        </div>
      </div>
    </>
  );
}

export default Pmetamorfozy;
