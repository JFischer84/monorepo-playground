import React from 'react';
import {render} from '@testing-library/react';

import {Fact} from './index';

describe('Fact', () => {
  it('should render correctly', () => {
    const {container} = render(<Fact factTitle="title" description="description" />);
    expect(container.firstChild).toHaveClass('factContainer');
    const div = container.firstChild;
    expect(div.firstChild).toHaveClass('fact');
    expect(div.firstChild.firstChild).toHaveTextContent('title');
    expect(container.querySelector('u')).toBeTruthy();
    expect(div.lastChild).toHaveClass('description');
    expect(div.lastChild).toHaveTextContent('description');
  });
});
