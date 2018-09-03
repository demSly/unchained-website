import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Chat = ({ chat }) => (
  <PageLayout title={chat.meta_title} metaDescription={chat.meta_description}>
    <div className="chat">
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <img className="icon" src="../static/img/06- business-team.svg" alt="" />
          <h1 className="mt0 c-black">
            Unchained on Spectrum
          </h1>
          <a href="https://spectrum.chat/unchained" className="button hero-button">
            Join Spectrum Community
          </a>
        </div>
      </div>
      <style jsx>
        {`
        .icon {
          width: 160px;
        }
      `}
      </style>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('chat'),
  pure,
)(Chat));
