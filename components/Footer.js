import React from 'react';
import Link from 'next/link';
import { injectIntl } from 'react-intl';
import variables from '../styles/variables';

const Footer = ({ intl }) => (
  <footer className="footer c-bg-gray">
    <div className="wrap footer__content">
      <div className="footer__top">
        <div className="footer__contact">
          <span>
Ask us anything
          </span>
          <div>
            <a className="hello" href="mailto:hello@unchained.shop">
hello@unchained.shop
            </a>
          </div>
        </div>

        <div className="social-links">
          <a className="social-link" href="https://github.com/unchainedshop/">
            <svg width="18px" height="18px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>
GitHub-Mark
              </title>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="GitHub-Mark" fill="#898989">
                  <path d="M16.608,0.455 C7.614,0.455 0.32,7.748 0.32,16.745 C0.32,23.942 4.987,30.047 11.46,32.201 C12.275,32.351 12.572,31.848 12.572,31.416 C12.572,31.03 12.558,30.005 12.55,28.646 C8.019,29.63 7.063,26.462 7.063,26.462 C6.322,24.58 5.254,24.079 5.254,24.079 C3.775,23.069 5.366,23.089 5.366,23.089 C7.001,23.204 7.861,24.768 7.861,24.768 C9.314,27.257 11.674,26.538 12.602,26.121 C12.75,25.069 13.171,24.351 13.636,23.944 C10.019,23.533 6.216,22.135 6.216,15.893 C6.216,14.115 6.851,12.66 7.893,11.522 C7.725,11.11 7.166,9.453 8.053,7.211 C8.053,7.211 9.42,6.773 12.532,8.881 C13.831,8.519 15.225,8.339 16.61,8.332 C17.994,8.339 19.387,8.519 20.688,8.881 C23.798,6.773 25.163,7.211 25.163,7.211 C26.052,9.453 25.493,11.11 25.326,11.522 C26.37,12.66 27,14.115 27,15.893 C27,22.151 23.191,23.528 19.563,23.931 C20.147,24.434 20.668,25.428 20.668,26.948 C20.668,29.125 20.648,30.882 20.648,31.416 C20.648,31.852 20.942,32.359 21.768,32.2 C28.236,30.041 32.899,23.94 32.899,16.745 C32.899,7.748 25.605,0.455 16.608,0.455" id="Fill-4" />
                </g>
              </g>
            </svg>
          </a>
          <a className="social-link" href="https://t.me/unchainedcommerce">
            <svg width="18" height="18" className="social-link" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300">
              <g>
                <path
                  fill="#898989"
                  d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"
                />
              </g>
            </svg>
          </a>
          <a className="social-link" href="https://twitter.com/unchained_shop">
            <svg width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.647 1.714c-.652.293-1.348.49-2.078.574.748-.45 1.322-1.167 1.593-2.02-.703.416-1.477.723-2.303.886C14.202.444 13.26 0 12.22 0c-2 0-3.62 1.636-3.62 3.656 0 .287.033.567.098.835C5.684 4.335 3.02 2.88 1.232.67c-.31.542-.49 1.168-.49 1.84 0 1.27.64 2.385 1.613 3.043-.594-.02-1.148-.182-1.64-.456v.045c0 1.773 1.247 3.246 2.905 3.585-.304.085-.626.13-.955.13-.232 0-.458-.026-.684-.065.46 1.454 1.8 2.51 3.382 2.542-1.24.978-2.8 1.565-4.497 1.565-.29 0-.58-.02-.865-.054 1.6 1.037 3.504 1.643 5.55 1.643 6.658 0 10.297-5.574 10.297-10.403 0-.157-.007-.32-.013-.476.716-.52 1.33-1.166 1.813-1.896z" fill="#898989" fillRule="evenodd" />
            </svg>
          </a>
          <a className="social-link" href="https://medium.com/unchained-commerce">
            <svg width="18" height="18" viewBox="0 0 195 195" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Monogram" fillRule="nonzero">
                  <rect id="Rectangle-path" fill="#898989" x="0" y="0" width="195" height="195" />
                  <path d="M46.5340803,65.2157554 C46.6968378,63.6076572 46.0836,62.018231 44.8828198,60.93592 L32.6512605,46.2010582 L32.6512605,44 L70.6302521,44 L99.9859944,108.380952 L125.794585,44 L162,44 L162,46.2010582 L151.542017,56.2281011 C150.640424,56.9153477 150.193188,58.0448862 150.380019,59.1628454 L150.380019,132.837155 C150.193188,133.955114 150.640424,135.084652 151.542017,135.771899 L161.755369,145.798942 L161.755369,148 L110.38282,148 L110.38282,145.798942 L120.963119,135.527337 C122.002801,134.487948 122.002801,134.182246 122.002801,132.592593 L122.002801,73.0417402 L92.585901,147.755438 L88.6106443,147.755438 L54.3622782,73.0417402 L54.3622782,123.115814 C54.0767278,125.221069 54.7759199,127.3406 56.2581699,128.863022 L70.0186741,145.55438 L70.0186741,147.755438 L31,147.755438 L31,145.55438 L44.7605042,128.863022 C46.2319621,127.338076 46.8903838,125.204485 46.5340803,123.115814 L46.5340803,65.2157554 Z" id="Shape" fill="#FFFFFF" />
                </g>
              </g>
            </svg>
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        <div>
          <div className="footer-label">
Resources
          </div>
          <Link href="/developers">
            <a className="footer__link">
              <small>
quick-start
              </small>
            </a>
          </Link>
          <Link href="/faq">
            <a className="footer__link">
              <small>
faq
              </small>
            </a>
          </Link>
          <Link href="/why-headless">
            <a className="footer__link">
              <small>
why headless
              </small>
            </a>
          </Link>
          <a href="/graphiql" target="_blank" rel="noopener noreferrer" className="footer__link">
            <small>
API (GraphiQL)
            </small>
          </a>
        </div>

        <div>
          <div className="footer-label">
Platform
          </div>
          <Link href="/platform">
            <a className="footer__link">
              <small>
                {intl.formatMessage({ id: 'overview' })}
              </small>
            </a>
          </Link>
          <Link href="/engine">
            <a className="footer__link">
              <small>
                {intl.formatMessage({ id: 'engine' })}
              </small>
            </a>
          </Link>
          <Link href="/managed-hosting">
            <a className="footer__link">
              <small>
                {intl.formatMessage({ id: 'hosting' })}
              </small>
            </a>
          </Link>
          <Link href="/control-panel">
            <a className="footer__link">
              <small>
                {intl.formatMessage({ id: 'control-panel' })}
              </small>
            </a>
          </Link>
        </div>

        <div>
          <div className="footer-label">
Partners
          </div>
          <Link href="/partners">
            <a className="footer__link">
              <small>
our partners
              </small>
            </a>
          </Link>
          <Link href="/showcase">
            <a className="footer__link">
              <small>
showcase
              </small>
            </a>
          </Link>
        </div>

        <div>
          <div className="footer-label">
            Company
          </div>
          <Link href="/about">
            <a className="footer__link">
              <small>
                {intl.formatMessage({ id: 'about' })}
              </small>
            </a>
          </Link>
          <a href="https://medium.com/unchained-commerce" target="_blank" rel="noopener noreferrer" className="footer__link">
            <small>
              announcements
            </small>
          </a>
          {/* <Link href="/fundraiser">
            <a className="footer__link">
              <small>
fundraiser
              </small>
            </a>
          </Link> */}
          <Link href="/chat">
            <a className="footer__link">
              <small>
                {intl.formatMessage({ id: 'chat' })}
              </small>
            </a>
          </Link>
          <Link href="/contact">
            <a className="footer__link">
              <small>
                {intl.formatMessage({ id: 'contact' })}
              </small>
            </a>
          </Link>
        </div>
      </div>

      <div className="copyright">
        <Link href="/imprint">
          <a className="footer-bottom-link">
            <small>
              {intl.formatMessage({ id: 'imprint' })}
            </small>
          </a>
        </Link>
        {
          /*
          <Link href="/terms">
            <a className="footer-bottom-link">
              <small>
                {intl.formatMessage({ id: 'terms' })}
              </small>
            </a>
          </Link>
          */
        }
        <Link href="/privacy">
          <a className="footer-bottom-link">
            <small>
              {intl.formatMessage({ id: 'privacy' })}
            </small>
          </a>
        </Link>
      </div>

      <div className="copyright">
        <small>
          © Unchained Commerce 2019.
        </small>
      </div>

    </div>

    <style jsx>
      {`
      .footer-bottom-link {
        display: inline-block;
        margin-right: 1em;
      }
      .footer-label {
        margin-bottom: .5em;
        font-size: 15px;
        text-transform: uppercase;
        color: ${variables.darkGrayColor};;
      }
      .icon-footer {
        width: 96px;
      }
      .footer__link {
        display: block;
      }

      .footer__link:hover {
        text-decoration: underline;
      }

      .footer__bottom > div {
        margin-bottom: 2.5em;
      }

      @media (max-width: 799px) {
        .footer__link + .footer__link {
          margin-top: .5em;
        }
        .footer__contact {
          margin-bottom: 2em;
        }
      }
      @media (min-width: 360px) {
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 700px;
        }
      }

      .footer__link {
        color: #676767;
      }
      .hello {
        display: block;
        font-size: 21px;
        font-weight: 500;
      }
      @media (min-width: 640px) {
        .hello {
          font-size: 28px;
        }
      }

      .hello:hover {
        text-decoration: underline;
      }

      .footer__content {
        position: relative;
        padding: 38px 1em 28px;
        color: #454545;
      }

      .footer__bottom {
        margin-top: 1.75em;
      }


      @media (min-width: 900px) {
        .footer__content {
          padding: 3em 1em 3em;
        }
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

      .copyright small {
        display: block;
        margin-top: 3.6em;
        font-size: 14px;
        color: ${variables.darkGrayColor};;
      }

    `}
    </style>
  </footer>
);

export default injectIntl(Footer);
