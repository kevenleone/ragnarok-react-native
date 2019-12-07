import gql from 'graphql-tag';

export const getMonsterFilter = gql`
  query getMonsterFilter($data: MonsterFilter!) {
    getMonsterFilter(data: $data) {
      id
      kName
      iName
      race
      image {
        animated
        static
      }
      color
    }
  }
`;

export const getMonsterById = gql`
  query getMonster($data: Float!) {
        getMonster(id: $data) {
        id
        kName
        iName
        race
        image {
          animated
          static
        }
        color
      }
    }
`;
