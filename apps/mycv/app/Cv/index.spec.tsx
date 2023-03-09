import React from 'react';
import {render} from '@testing-library/react';
import Cv from './index';

const cvData = {name: 'Jonas Fischer',
  classAndLevel: 'Developer 7',
  background: 'Catlover/Gamer',
  alignment: 'Neutral Good',
  species: 'Human'};

const feats = ['cheese', 'chocolate', 'honey'];

describe('Cv', () => {
  it('should render correctly', () => {
    const {container} = render(<Cv cvData={cvData} feats={feats} />);
    expect(container.firstChild).toHaveClass('cardContent');
    expect(container.querySelectorAll('div')).toHaveLength(48);
  });
});
