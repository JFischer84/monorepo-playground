import React from 'react';
import {render} from '@testing-library/react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import {Index} from '../pages';

// this test needs to stay out of the pages folder because there is an error with Nextjs
describe('Index', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Index />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
