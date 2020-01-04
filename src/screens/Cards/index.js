import React, { useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Switch, Case } from 'react-if';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { getMonstersGalery } from '../../graphql/gql/query/monster';
import { Galery, Discovery } from '../../components/Card';
import Page from '../../components/UI/Page';

const buttons = ['Galery', 'Discovery'];

const CardsScreen = ({ navigation }) => {
  const [variables, setVariables] = useState({ data: { Page: 1 } });
  const [cards, setCards] = useState([]);
  const [selectedIndex, setIndex] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  function onCompleted(data) {
    if (data) {
      setCards(data.getMonstersGalery);
    }
    if (firstLoad) setFirstLoad(false);
  }

  return (
    <>
      <ButtonGroup
        onPress={setIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 30 }}
      />

      <Switch>
        <Case condition={selectedIndex === 0}>
          <Query query={getMonstersGalery} variables={variables} onCompleted={onCompleted}>
            {({ loading, error }) => (
              <Page loading={loading} error={error}>
                <ScrollView>
                  <Galery
                    setVariables={setVariables}
                    navigation={navigation}
                    variables={variables}
                    cards={cards}
                  />
                </ScrollView>
              </Page>
            )}
          </Query>
        </Case>

        <Case condition={selectedIndex === 1}>
          <Discovery navigation={navigation} />
        </Case>
      </Switch>
    </>
  );
};

CardsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CardsScreen;
