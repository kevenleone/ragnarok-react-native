import React, { useState } from 'react';
import { Query } from 'react-apollo';
import MonsterList from '../../components/MonsterList';
import { getMonsterFilter } from '../../graphql/gql/query/monster';
import Page from '../../components/Page';

const Monsters = ({ navigation }) => {
  const params = navigation.getParam('data', { data: { Page: 1 } });
  const [variables, setVariables] = useState(params);
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
