import gql from 'graphql-tag';

const status = 'HP, SP, EXP, JEXP, ATK1, ATK2, DEF, MDEF, STR, AGI, VIT, INT, DEX, LUK';

const MonsterStatus = gql`
  fragment MonsterStatus on Monster {
    ${status}
  }
`;

const StatusReference = gql`
  fragment StatusReference on StatusReference {
    ${status}
  }
`;

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
        mobplace {
          id
          map
          spawn
          quantity
        }
        statusReference {
          ...StatusReference
        }
        color
        ...MonsterStatus
      }
    }
    ${MonsterStatus}
    ${StatusReference}
`;

// # ${MonsterStatusAbc}
