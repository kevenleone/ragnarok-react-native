import React, { useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Query } from 'react-apollo';
import { Switch, Case } from 'react-if';
import { Galery, Discovery } from '../../components/Card';
import Page from '../../components/UI/Page';
import { getMonstersGalery } from '../../graphql/gql/query/monster';

const buttons = ['Galery', 'Discovery'];

const CardsScreen = ({ navigation }) => {
  const [variables, setVariables] = useState({ data: { Page: 1 } });
  const [cards, setCards] = useState([]);
  const [selectedIndex, setIndex] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true);

  function onCompleted(data) {
    if (data) {
      setCards(data.getMonstersGalery);
    }
    if (firstLoad) setFirstLoad(false);
  }

  return (
    <ScrollView>
      <ButtonGroup
        onPress={setIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 30 }}
      />
      <Switch>
        <Case condition={selectedIndex === 0}>
          <Query query={getMonstersGalery} variables={variables} onCompleted={onCompleted}>
            {({ data, loading, error }) => (
              <Page loading={loading} error={error}>
                <Galery
                  setVariables={setVariables}
                  navigation={navigation}
                  variables={variables}
                  cards={cards}
                />
              </Page>
            )}
          </Query>
        </Case>

        <Case condition={selectedIndex === 1}>
          <Discovery />
        </Case>
      </Switch>
    </ScrollView>
  );
};

export default CardsScreen;
