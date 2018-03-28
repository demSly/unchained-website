let apolloClient = null;
let apolloCreate = null;

export function setApolloClientFactory(create) {
  apolloCreate = create;
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return apolloCreate(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = apolloCreate(initialState, options);
  }

  return apolloClient;
}
