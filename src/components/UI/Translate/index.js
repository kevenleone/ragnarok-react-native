import { Component } from 'react';
import PropTypes from 'prop-types';
import i18N from '../../../i18N';
import LanguageService from './LanguageService';

// eslint-disable-next-line import/no-mutable-exports
let dict;
if (!dict) {
  dict = new LanguageService(i18N);
}

const { translate } = dict;

class Translate extends Component {
  render() {
    const { parameters, children } = this.props;
    if (children) {
      return translate(children, parameters);
    }
    return '';
  }
}

Translate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  parameters: PropTypes.objectOf(PropTypes.object),
};

Translate.defaultProps = {
  parameters: {},
};

export { dict, translate };
export default Translate;
