import React from 'react';
import { When } from 'react-if';

import {
  CardList, Card, Text, Icon, IconView, Touchable, ButtonText,
} from './styles';

const index = ({
  itens = [], subItems, navigation, setSubItems,
}) => {
  function onClickCategory(action, { page, params }) {
    if (typeof action === 'function') {
      const content = action();
      navigation.navigate(content.page);
    } else if (page !== undefined) {
      navigation.navigate(page, params);
    } else {
      setSubItems(action);
    }
  }

  return (
    <>
      <When condition={subItems !== null}>
        <Touchable onPress={() => setSubItems(null)}>
          <ButtonText color="#999">Back to Main List</ButtonText>
        </Touchable>
      </When>

      <CardList>
        { itens.map(({
          page, params, action, title, uri, color,
        }) => (
          <Card
            key={title}
            color={color}
            onPress={() => onClickCategory(action, { params, page })}
          >
            <Text>{title}</Text>
            <IconView>
              <Icon
                source={{ uri }}
              />
            </IconView>
          </Card>
        ))}
      </CardList>
    </>
  );
};

export default index;
