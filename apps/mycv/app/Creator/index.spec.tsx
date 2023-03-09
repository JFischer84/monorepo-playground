import React from 'react';
import {render} from '@testing-library/react';

import Creator from './index';

describe('Creator', () => {
  it('should render correctly', () => {
    const {container} = render(<Creator />);
    expect(container.querySelectorAll('div')).toHaveLength(11);
  });
});
