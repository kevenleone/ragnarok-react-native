import React from 'react';
import { When } from 'react-if';
import PropTypes from 'prop-types';
import MenuCategory from '../../MenuCategory';
import { translate } from '../../UI/Translate';
import {
  CardList, Touchable, ButtonText,
} from './styles';

const Categories = ({
  items, subItems, navigation, setSubItems,
}) => {
  function onClickCategory({ action, page, params }) {
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
          <ButtonText color="#999">{translate('CATEGORIES_BACK')}</ButtonText>
        </Touchable>
      </When>

      <CardList>
        {items.map((item, index) => (
          <MenuCategory
            onPress={onClickCategory}
            key={index}
            {...item}
          />
        ))}
      </CardList>
    </>
  );
};

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  subItems: PropTypes.oneOfType([PropTypes.array]),
  setSubItems: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Categories.defaultProps = {
  items: [],
  subItems: null,
};

export default Categories;
