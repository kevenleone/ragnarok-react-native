import React from 'react';
import { shallow } from 'enzyme';
import Categories from '..';

describe('Should validate Home Categories', () => {
  it('Should works', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toMatchSnapshot();
  });
});
