import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://192.168.1.101:3333/graphql' });

const Client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default Client;
