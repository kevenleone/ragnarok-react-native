import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import MonsterInfo from '../../components/MonsterInfo';
import { getMonsterById } from '../../graphql/gql/query/monster';
import Page from '../../components/Page';

const Monster = ({ navigation }) => {
  const { getParam } = navigation;
  const id = Number(getParam('id'));
  return (
    <Query query={getMonsterById} variables={{ data: id }}>
      {({ data, loading, error }) => (
        <Page loading={loading}>
          <MonsterInfo
            navigation={navigation}
            monster={data ? data.getMonster : {}}
          />
        </Page>
      )}
    </Query>
  );
};

Monster.navigationOptions = {
  header: null,
};

Monster.propTypes = {
  // navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Monster;