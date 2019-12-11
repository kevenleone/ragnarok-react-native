import React, { useState } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { getMonsterFilter } from '../../graphql/gql/query/monster';
import MonsterList from '../../components/MonsterList';
import Page from '../../components/Page';

const Monsters = ({ navigation }) => {
  const params = navigation.getParam('data', { data: { Page: 1 } });
  const [variables, setVariables] = useState(params);
  const [monsters, setMonsters] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  function onCompleted(data) {
    if (data) setMonsters([...monsters, ...data.getMonsterFilter]);
    if (firstLoad) setFirstLoad(false);
  }

  return (
    <Query
      onCompleted={onCompleted}
      query={getMonsterFilter}
      variables={variables}
    >
      {({ loading }) => (
        <Page loading={loading && firstLoad}>
          <MonsterList
            setVariables={setVariables}
            navigation={navigation}
            variables={variables}
            list={monsters}
          />
        </Page>
      )}
    </Query>
  );
};

Monsters.navigationOptions = {
  header: null,
};

Monsters.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Monsters;
