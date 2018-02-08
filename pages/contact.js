import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/forms/ContactForm';

const Kontakt = ({ contact, markDone }) => (
  <PageLayout title={contact.title} metaDescription={contact.text}>
    <div className="wrap wrap--narrow hero c-bg-gray mt3 mb3 text-center">
      <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: contact.address,
      }}
      />

      <div className="social-links">
        <a className="social-link" href="https://twitter.com/fivelinesCH">
          <svg width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M17.647 1.714c-.652.293-1.348.49-2.078.574.748-.45 1.322-1.167 1.593-2.02-.703.416-1.477.723-2.303.886C14.202.444 13.26 0 12.22 0c-2 0-3.62 1.636-3.62 3.656 0 .287.033.567.098.835C5.684 4.335 3.02 2.88 1.232.67c-.31.542-.49 1.168-.49 1.84 0 1.27.64 2.385 1.613 3.043-.594-.02-1.148-.182-1.64-.456v.045c0 1.773 1.247 3.246 2.905 3.585-.304.085-.626.13-.955.13-.232 0-.458-.026-.684-.065.46 1.454 1.8 2.51 3.382 2.542-1.24.978-2.8 1.565-4.497 1.565-.29 0-.58-.02-.865-.054 1.6 1.037 3.504 1.643 5.55 1.643 6.658 0 10.297-5.574 10.297-10.403 0-.157-.007-.32-.013-.476.716-.52 1.33-1.166 1.813-1.896z" fill="#333333" fillRule="evenodd" /></svg>
        </a>
      </div>

      <ContactForm onSubmitSuccess={markDone} />
    </div>

    <style jsx>{`
      .pipe {
        font-size: 40px
        padding: .5em;
      }
      .contact-box-wrap {
        display: flex;
        justify-content: flex-end;
        padding-right: 1em;
        padding-top: 2em;
      }
      .contact-box {
        text-align: right;
        color: white;
        padding-top: 4em;
        padding-bottom: 20em;
      }
      @media (min-width: 768px) {
        .contact-box-wrap {
          padding-top: 0;
          padding-right: 0;
        }
        .contact-box {
          float: right;
          padding: 7em 2em 1em;
          background-color: rgba(0,0,0,.5);
          height: 80vh;
          width: 310px;
        }
      }
    `}
    </style>

  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('contact'),
)(Kontakt));
