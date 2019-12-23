import gql from 'graphql-tag';

export default gql`
  query getMonsterPlaceFilter($data: MonsterPlaceFilter!) {
    getMonsterPlaceFilter(data: $data) {
      id
      map
      img
    }
  }
`;

export const getMapQuery = gql`
query getMap($map: String!) {
    getMap(map: $map) {
      id
      map
      img
      monsters {
        id
        kName
        spawn
        image {
          animated
        }
      }
    }
  }
`;
