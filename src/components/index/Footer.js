import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <footer>
        <div id="footerBackground">
          <div id="footerCallCon">
            <div
              id="footerCallText"
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              ZADZWOŃ TERAZ
            </div>
            <div
              id="footerCallNumber"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-once="true"
            >
              503 577 932
            </div>
          </div>
        </div>
        <div id="footerContent">
          <div id="footerContactBorder">
            {status === 'SUCCESS' ? (
              <div className="footerCenterCont">
                <div className="footerCenter">wysłano!</div>
              </div>
            ) : (
              <form
                action="https://formspree.io/moqwldol"
                method="POST"
                onSubmit={this.submitForm}
              >
                <div id="footerContactHeader">
                  Wolisz napisać? Nie ma problemu!
                </div>
                <p>
                  Wyślij do mnie e-mail, lub skontaktuj się ze mną poprzez
                  Facebook Messenger.
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Twój adres e-mail"
                  maxLength="30"
                  required
                />
                <input
                  type="tel"
                  name="subject"
                  placeholder="Twój numer telefonu"
                  maxLength="9"
                  required
                  pattern="[0-9]{9}"
                />
                <textarea
                  name="message"
                  placeholder="Treść wiadomości..."
                  maxLength="600"
                  minLength="10"
                  required
                />
                <button type="button">wyślij</button>
              </form>
            )}
            {status === 'ERROR' && (
              <p>
                Wystąpił błąd. Maila nie wysłano. Zadzwoń, napisz na Messenger,
                lub napisz na: tymekoks@gmail.com
              </p>
            )}
          </div>

          <div id="footerAboutMe">
            <div id="footerMapContainer">
              <div id="footerMap">
                <div id="footerMapHeader">Aktualnie pracuję w: </div>
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuwbKviNbBEcRvWQliAw1SZc&key=AIzaSyBJX_FzAlIwwa6TMAIsQrWBFDVOpd_akto"
                  title="iframeTymek"
                />
              </div>
              <div id="footerSocialContainer">
                <div id="footerSocialHeader">Znajdziesz mnie na:</div>
                <div id="footerIcons">
                  <a
                    href="https://www.facebook.com/Pakuj-z-Tymkiem-109305670666810/?tn-str=k*F"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                    data-aos-once="true"
                  >
                    <FontAwesomeIcon icon={faFacebookF} color="#3b5999" />
                  </a>
                  <a
                    href="https://www.instagram.com/pakuj_z_tymkiem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                    data-aos-once="true"
                  >
                    <FontAwesomeIcon icon={faInstagram} color="#e4405f" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCZFRwCFxdPGHL7lYPEtV6Qw?guided_help_flow=3"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                    data-aos-once="true"
                  >
                    <FontAwesomeIcon icon={faYoutube} color="#cd201f" />
                  </a>
                </div>
              </div>
            </div>
            <div id="footerClose">
              <section id="footerCopyright">
                &copy; 2020 - Wszelkie prawa zastrzeżone
              </section>
              <section id="footerMakedBy">
                Projekt i Realizacja:{' '}
                <a
                  href="https://tomsza26.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tomasz Szablewski
                </a>
              </section>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
