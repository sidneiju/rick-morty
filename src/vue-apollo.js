import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client'

Vue.use(VueApollo)

const httpEndpoint = 'https://rickandmortyapi.com/graphql';

export function createProvider() {
  const { apolloClient } = createApolloClient({
    httpEndpoint,
    fetchOptions: {
      mode: "noCors"
    }
  });

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    errorHandler(error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message);
    },
  });

  return apolloProvider;
}