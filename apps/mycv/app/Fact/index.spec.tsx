import React from 'react';
import {shallow} from 'enzyme';

import {Fact} from './index';

describe('Fact', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Fact factTitle="title" description="description" />);
    expect(wrapper.find('.factContainer').exists()).toBe(true);
    expect(wrapper.find('.fact').exists()).toBe(true);
    expect(wrapper.find('u').text()).toBe('title');
    expect(wrapper.find('p')).toHaveLength(2);
    expect(wrapper.find('p').last().text()).toBe('description');
  });
});
