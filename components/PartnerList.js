
import React from 'react';
import { compose } from 'recompose';
import withPartners from '../lib/withPartners';
import withLoadingComponent from '../lib/withLoadingComponent';

const PartnerList = ({ partners }) => (
  <div className="partners">
    {partners && partners
      .map(({
        _id, name, text, logo, website,
      }) => (
        <div className="partner" key={_id}>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <img className="animated fadeIn" src={logo.url} alt={`${name} logo`} />
            {text}
          </a>
        </div>
      ))}
    <style jsx>
      {`
      .partners {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      .partner {
        margin: 4em 4em 4em 0;
      }
      .partner img {
        max-width: 240px;
        max-height: 240px;
      }
    `}
    </style>
  </div>
);

export default compose(
  withPartners,
  withLoadingComponent,
)(PartnerList);
