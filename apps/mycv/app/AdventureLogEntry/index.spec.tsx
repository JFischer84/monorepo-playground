import React from 'react';
import {render} from '@testing-library/react';

import {AdventureLogEntry} from './index';

describe('AdventureLogEntry', () => {
  it('should render correctly', () => {
    const entry = {entryText: 'entry text'};

    const {container} = render(<AdventureLogEntry entry={entry} />);

    const listItem = container.firstChild;
    expect(listItem).toBeTruthy();
    expect(listItem).toHaveClass('list-group-item');
    expect(listItem).toHaveAttribute('aria-current', 'false');
  });

  it('should render correctly with isLast true', () => {
    const entry = {entryText: 'entry text',
      isLast: true};

    const {container} = render(<AdventureLogEntry entry={entry} />);

    const listItem = container.firstChild;
    expect(listItem).toBeTruthy();
    expect(listItem).toHaveClass('list-group-item active');
    expect(listItem).toHaveAttribute('aria-current', 'true');
  });
});
