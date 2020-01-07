import { AsyncStorage } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloLinkTimeout from 'apollo-link-timeout';

const timeoutLink = new ApolloLinkTimeout(15000); // 15 second timeout

const httpLink = new HttpLink({
  uri: 'http://localhost:3333/graphql',
  headers: async () => ({
    authorization: await AsyncStorage.getItem('@token') || 'test',
  }),
});

const timeoutHttpLink = timeoutLink.concat(httpLink);

const Client = new ApolloClient({
  link: timeoutHttpLink,
  cache: new InMemoryCache(),
});

export default Client;
