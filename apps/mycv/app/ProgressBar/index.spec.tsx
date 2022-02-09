import { render } from '@testing-library/react';

import ProgressBar from './index';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressBar colorScheme="javascript" title="test" />);
    expect(baseElement).toBeTruthy();
  });
});