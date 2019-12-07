import gql from 'graphql-tag';

export default gql`
  query {
    getRaces {
      id
      race
      background
      representationMonster {
        id
        kName
        image {
          animated
          static
        }
      }
    }
  }
  `;
