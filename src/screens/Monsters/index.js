import React, { useState } from 'react';
import { Query } from 'react-apollo';
import MonsterList from '../../components/MonsterList';
import { getMonsterFilter } from '../../graphql/gql/query/monster';
import Page from '../../components/Page';

const defaultVariables = {
  data: {
    Page: 3,
  },
};

const Monsters = ({ navigation }) => {
  const [variables, setVariables] = useState(defaultVariables);
  const [monsters, setMonsters] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  function onCompleted(data) {
    setMonsters([...monsters, ...data.getMonsterFilter]);
    if (firstLoad) {
      setFirstLoad(false);
    }
  }

  return (
    <Query
      query={getMonsterFilter}
      onCompleted={onCompleted}
      variables={variables}
    >
      {({ loading }) => (
        <Page loading={loading && firstLoad}>
          <MonsterList
            list={monsters}
            navigation={navigation}
            variables={variables}
            setVariables={setVariables}
            firstLoad
          />
        </Page>
      )}
    </Query>
  );
};

Monsters.navigationOptions = {
  header: null,
};

export default Monsters;
