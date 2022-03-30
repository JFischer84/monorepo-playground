import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import {Accordion} from './index';

describe('Accordion', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Accordion title="test"><span>Child</span></Accordion>);
    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.find('span').text()).toBe('Child');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
