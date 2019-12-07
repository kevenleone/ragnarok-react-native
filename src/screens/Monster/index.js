import React from 'react';
import { Query } from 'react-apollo';
import MonsterInfo from '../../components/MonsterInfo';
import { getMonsterById } from '../../graphql/gql/query/monster';

const Monster = ({ navigation }) => {
  const { getParam } = navigation;
  const id = Number(getParam('id'));
  return (
    <Query query={getMonsterById} variables={{ data: id }}>
      {({ data, loading, error }) => {
        console.log(data);
        return (
          <MonsterInfo
            navigation={navigation}
            monster={data ? data.getMonster : {}}
          />
        );
      }}
    </Query>
  );
};

Monster.navigationOptions = {
  header: null,
};

export default Monster;
