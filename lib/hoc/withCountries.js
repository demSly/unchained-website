import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultCountries = [];

export default compose(
  graphql(gql`
    query countries {
      countries {
        _id
        isoCode
        name
        flagEmoji
      }
      shopInfo {
        _id
        country {
          _id
          name
        }
      }
    }
  `),
  mapProps(({
    data: { countries, shopInfo, loading }, loading: loadingPredecessor = false, ...rest
  }) => ({
    countries: countries || defaultCountries,
    currentCountry: (shopInfo && shopInfo.country) || {},
    loading: !countries && (loading || loadingPredecessor),
    ...rest,
  })),
);
