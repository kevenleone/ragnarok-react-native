import gql from 'graphql-tag';

export default gql`
  query getMonsterPlaceFilter($data: MonsterPlaceFilter!) {
      getMonsterPlaceFilter(data: $data) {
      id
      map
      img
      monsters {
        id
        race
        kName
        image {
          animated
        }
      }
    }
  }
  `;
