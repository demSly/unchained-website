import { compose, mapProps, defaultProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default externalRegionId => compose(
  defaultProps({
    regionId: externalRegionId,
  }),
  graphql(gql`
    query getRegion($regionId: String!) {
      region(regionId: $regionId)
    }
  `),
  mapProps(({
    regionId, data: { loading, region }, loading: loadingPredecessor = false, ...rest
  }) => {
    const regionSpread = {};
    regionSpread[regionId] = region || {};
    const mapped = {
      loading: !region && (loading || loadingPredecessor),
      regionId,
      ...regionSpread,
      ...rest,
    };
    mapped[regionId] = region || {};
    return mapped;
  }),
);
