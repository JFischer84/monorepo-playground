import React from 'react';
import {render} from '@testing-library/react';

import {Feat} from './index';

describe('Feat', () => {
  it('should render correctly', () => {
    const {container} = render(<Feat featTitle="title" />);
    expect(container.firstChild).toHaveClass('col text-center');
    expect(container.querySelector('h3')).toBeTruthy();
    expect(container.querySelector('span')).toBeTruthy();
    expect(container.querySelector('span')).toHaveClass('badge bg-primary text-light');
    expect(container.querySelector('span')).toHaveTextContent('title');
  });
});
