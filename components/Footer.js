import React from 'react';
import Link from 'next/link';
import { injectIntl } from 'react-intl';
import ChangeCountryButton from './ChangeCountryButton';

const Footer = ({ intl }) => (
  <footer className="footer c-bg-gray">
    <div className="wrap footer__content">
      <div className="footer__top">
        <div className="footer__contact">
          <div>
            <a className="hello" href="mailto:hi@unchained.shop">hi@unchained.shop</a>
          </div>
        </div>

        <div className="newsletter-form-wrap">
          <small>{intl.formatMessage({ id: 'subscribe_to_newsletter' })}</small>
          <div id="mc_embed_signup" className="form">
            <form action="https://shop.us17.list-manage.com/subscribe/post?u=1c6b1723591711e408db610fb&amp;id=5eaceef803" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate>
              <div id="mc_embed_signup_scroll" className="newsletter-form">
                <div>
                  <div className="mc-field-group field__input-wrapper">
                    <input
                      className="field__input required email"
                      type="email"
                      name="EMAIL"
                      aria-label="newsletter e-mail"
                      id="mce-EMAIL"
                      required="required"
                      placeholder="E-Mail"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                    <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_1c6b1723591711e408db610fb_5eaceef803" tabIndex="-1" value="" />
                  </div>
                </div>
                <div className="clear">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button footer-newsletter-button" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="social-links">
          <a className="social-link" href="https://twitter.com/fivelinesCH">
            <svg width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg"><title>Fill 1</title><path d="M17.647 1.714c-.652.293-1.348.49-2.078.574.748-.45 1.322-1.167 1.593-2.02-.703.416-1.477.723-2.303.886C14.202.444 13.26 0 12.22 0c-2 0-3.62 1.636-3.62 3.656 0 .287.033.567.098.835C5.684 4.335 3.02 2.88 1.232.67c-.31.542-.49 1.168-.49 1.84 0 1.27.64 2.385 1.613 3.043-.594-.02-1.148-.182-1.64-.456v.045c0 1.773 1.247 3.246 2.905 3.585-.304.085-.626.13-.955.13-.232 0-.458-.026-.684-.065.46 1.454 1.8 2.51 3.382 2.542-1.24.978-2.8 1.565-4.497 1.565-.29 0-.58-.02-.865-.054 1.6 1.037 3.504 1.643 5.55 1.643 6.658 0 10.297-5.574 10.297-10.403 0-.157-.007-.32-.013-.476.716-.52 1.33-1.166 1.813-1.896z" fill="#333333" fillRule="evenodd" /></svg>
          </a>
        </div>

      </div>

      <div className="footer__bottom flex-between">
        <div className="mr1">
          <Link href="/imprint">
            <a className="footer__link"><small>{intl.formatMessage({ id: 'imprint' })}</small></a>
          </Link>
          <Link href="/terms">
            <a className="footer__link"><small>{intl.formatMessage({ id: 'terms' })}</small></a>
          </Link>
          <Link href="/return-policy">
            <a className="footer__link"><small>{intl.formatMessage({ id: 'return_policy' })}</small></a>
          </Link>
        </div>
      </div>

      <div className="flex-between">
        <div className="footer__payments">
          <img className="cc" src="../static/img/icon/cc/visa.svg" alt="visa icon" />
          <img className="cc" src="../static/img/icon/cc/mastercard.svg" alt="mastercard icon" />
          <img className="cc" src="../static/img/icon/cc/amex.svg" alt="amex icon" />
          {/* <img className="cc" src="../static/img/postcard.png" alt="postfinance icon" /> */}
          <img className="cc paypal" src="../static/img/paypal.jpeg" alt="paypal icon" />
          {/* <div className="cc bill">{intl.formatMessage({ id: 'bill' })}</div> */}
        </div>


        <ChangeCountryButton
          className="no-button"
          icon="../static/img/icon/map-direction.svg"
        />
      </div>
    </div>

    <style jsx>{`
      #mc_embed_signup_scroll {
        display: flex;
        margin: 0 auto;
        max-width: 270px;
      }
      @media (max-width: 899px) {
        .footer__contact {
          margin-bottom: 2em;
        }
        .footer__bottom {
          text-align: center;
        }
      }
      .mc-field-group.field__input-wrapper {
        min-width: 196px;
      }
      .footer-newsletter-button {
        background-image: url(../../static/img/icon/email-send-1.svg);
        height: 42px;
        width: 60px;
        background-position: center;
        background-repeat: no-repeat;
        text-indent: -9999px;
        margin-left: .25em;
      }
      .footer__link + .footer__link {
        margin-left: 1em;
      }
      .hello {
        display: block;
        font-size: 28px;
      }
      @media (min-width: 640px) {
        .hello {
          font-size: 36px;
        }
      }

      .hello:hover {
        text-decoration: underline;
      }

      .footer__content {
        position: relative;
        padding: 38px 1em 28px;
      }

      .footer__bottom {
        margin-top: 1.5em;
        margin-bottom: 24px;
      }

      .social-links {
        flex-basis: 100%;
        text-align: center;
        margin: 2em auto;
      }

      .social-links .pipe {
        margin-left: 1em;
        margin-right: 1em;
        font-size: 24px;
      }

      .social-link + .social-link {
        margin-left: 1em;
      }

      .footer__top {
        text-align: center;
      }

      @media (min-width: 900px) {
        .newsletter-form-wrap {
          margin-top: -20px;
        }
        .hello {
          margin-right: 1em;
        }

        .newsletter-form {
          display: flex;
          margin: -22px 1em 0 0;
        }

        .footer__top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
        }

        .social-links {
          margin: 0;
          flex-basis: auto;
          text-align: initial;
          margin-top: 10px;
        }
      }
      .cc {
        width: 51px;
        height: 32px;
        margin-right: .25em;
        filter: grayscale(100%);
        opacity: .3;
        transition: all ease-in-out .2s;
        vertical-align: top;
      }
      .cc:hover {
        filter: grayscale(0%);
        opacity: .9;
      }
      @media (max-width: 640px) {
        .cc {
          width: 38px;
          height: 24px;
        }
      }
      .bill {
        width: auto;
        height: auto;
        display: inline-block;
        font-size: 11px;
        border: 1px solid lightgray;
        padding: 7px 10px;
      }
      @media (max-width: 640px) {
        .bill {
          height: 24px;
          padding: 3px 6px;
        }
      }

    `}
    </style>
  </footer>
);

export default injectIntl(Footer);
