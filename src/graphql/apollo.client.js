import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const Client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default Client;
