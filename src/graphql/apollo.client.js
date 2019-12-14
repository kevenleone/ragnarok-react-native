import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://10.0.0.102:3333/graphql' });

const Client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default Client;
