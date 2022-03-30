import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Cv from './index';

const cvData = {name: 'Jonas Fischer',
  classAndLevel: 'Developer 7',
  background: 'Catlover/Gamer',
  alignment: 'Neutral Good',
  species: 'Human'};

const feats = ['cheese', 'chocolate', 'honey'];

describe('Cv', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Cv cvData={cvData} feats={feats} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
