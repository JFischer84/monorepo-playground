import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import {Index} from './index';

describe('Index', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Index />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
