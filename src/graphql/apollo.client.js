import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloLinkTimeout from 'apollo-link-timeout';

const timeoutLink = new ApolloLinkTimeout(15000); // 15 second timeout

const httpLink = new HttpLink({ uri: 'http://192.168.1.101:3333/graphql' });

const timeoutHttpLink = timeoutLink.concat(httpLink);

const Client = new ApolloClient({
  link: timeoutHttpLink,
  cache: new InMemoryCache(),
});

export default Client;
