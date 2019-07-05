import gql from 'graphql-tag';
import hashPassword from './hashPassword';

export default async function ({ oldPassword, newPassword }, apollo) {
  if (!oldPassword || !newPassword) throw new Error('Old and new password are required');

  const result = await apollo.mutate({
    mutation: gql`mutation changePassword($oldPassword: HashedPasswordInput!, $newPassword: HashedPasswordInput!) {
      changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
        success
      }
    }`,
    variables: {
      oldPassword: hashPassword(oldPassword),
      newPassword: hashPassword(newPassword),
    },
  });

  const { success } = result.data.changePassword;
  return success;
}
