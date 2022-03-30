import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Creator from './index';

describe('Creator', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Creator />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
