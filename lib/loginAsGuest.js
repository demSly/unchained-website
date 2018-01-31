import gql from 'graphql-tag';
import cookie from 'cookie';
import moment from 'moment';

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
  const { userId, token, tokenExpires: tokenExpiresRaw } = result.data.loginAsGuest;
  const tokenExpires = new Date(tokenExpiresRaw);
  global.localStorage['Meteor.userId'] = userId;
  global.localStorage['Meteor.loginToken'] = token;
  global.localStorage['Meteor.loginTokenExpires'] = tokenExpires.toString();
  const maxAge = moment().diff(tokenExpires, 'seconds') * -1;
  console.debug('new token, expiring: ', maxAge); // eslint-disable-line
  document.cookie = cookie.serialize('token', token, { maxAge });
  apollo.resetStore();
  return userId;
}
