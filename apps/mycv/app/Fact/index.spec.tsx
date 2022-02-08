import { render } from '@testing-library/react';

import Fact from './index';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fact  description="jo"  fact="fact" />);
    expect(baseElement).toBeTruthy();
  });
});
