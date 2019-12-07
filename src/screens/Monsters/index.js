import React, { useState } from 'react';
import { Query } from 'react-apollo';
import MonsterList from '../../components/MonsterList';
import { getMonsterFilter } from '../../graphql/gql/query/monster';

const defaultVariables = {
  data: {
    Page: 8,
  },
};

const Monsters = ({ navigation }) => {
  const [variables, setVariables] = useState(defaultVariables);
  const [monsters, setMonsters] = useState([]);

  function onCompleted(data) {
    setMonsters([...monsters, ...data.getMonsterFilter]);
  }

  return (
    <Query
      query={getMonsterFilter}
      onCompleted={onCompleted}
      variables={variables}
    >
      {({ loading }) => (
        <MonsterList
          list={monsters}
          navigation={navigation}
          variables={variables}
          setVariables={setVariables}
        />
      )}
    </Query>
  );
};

Monsters.navigationOptions = {
  header: null,
};

export default Monsters;
