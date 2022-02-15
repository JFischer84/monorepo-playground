import React from 'react';
import {shallow} from 'enzyme';

import {Feat} from './index';

describe('Feat', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Feat featTitle="title" />);
    expect(wrapper.find('.col').exists()).toBe(true);
    expect(wrapper.find('h3').exists()).toBe(true);
    expect(wrapper.find('span').text()).toBe('title');
    expect(wrapper.find('span').hasClass('badge bg-primary text-light')).toBe(true);
  });
});
