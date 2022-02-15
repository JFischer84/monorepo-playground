import React from 'react';
import {shallow} from 'enzyme';

import {AdventureLogEntry} from './index';

describe('AdventureLogEntry', () => {
  it('should render correctly', () => {
    const entry = {
      entryText: 'entry text'
    };

    const wrapper = shallow(<AdventureLogEntry entry={entry} />);
    expect(wrapper.find('.list-group-item').exists()).toBe(true);
    expect(wrapper.find('li').text()).toBe('entry text');
    expect(wrapper.find('li').prop('aria-current')).toBe(false);
  });

  it('should render correctly with ', () => {
    const entry = {
      entryText: 'entry text',
      isLast: true
    };

    const wrapper = shallow(<AdventureLogEntry entry={entry} />);
    expect(wrapper.find('li').hasClass('list-group-item active')).toBe(true);
    expect(wrapper.find('li').text()).toBe('entry text');
    expect(wrapper.find('li').prop('aria-current')).toBe(true);
  });
});
