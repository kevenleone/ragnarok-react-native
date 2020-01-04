import gql from 'graphql-tag';
import { ItemFragment } from './item';

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

export const getMonstersGalery = gql`
  query getMonstersGalery {
    getMonstersGalery {
      id
      image {
        art
      }
    }
  }
`;

export const getMonsterRandom = gql`
  query getMonsterRandom {
    getMonsterRandom {
      id
      kName
      color
      image {
        art
        animated
      }
    }
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
          monsterDrops {
            ...ItemFragment
          }
          image {
            animated
            static
          }
          mobplace {
            id
            map
            img
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
      ${ItemFragment}
`;

// # ${MonsterStatusAbc}
