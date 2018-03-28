import gql from 'graphql-tag';
import { storeLoginToken } from './store';

export default async function (apollo) {
  const result = await apollo.mutate({
    mutation: gql`
      mutation loginAsGuest {
        loginAsGuest {
          id
          token
          tokenExpires
        }
      }
    `,
  });

  const { id, token, tokenExpires } = result.data.loginAsGuest;
  await storeLoginToken(id, token, new Date(tokenExpires));
  return id;
}
