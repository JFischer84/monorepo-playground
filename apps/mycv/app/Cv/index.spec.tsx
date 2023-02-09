import React from 'react';
import {shallow} from 'enzyme';
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
    expect(wrapper.find('.cardContent').exists()).toBe(true);
    expect(wrapper.find('.profilePicture').exists()).toBe(true);
    expect(wrapper.find('.card-title').exists()).toBe(true);
    expect(wrapper.find('.factSection').exists()).toBe(true);
    expect(wrapper.find('.progressBarContainer').exists()).toBe(true);
    expect(wrapper.find('.featsContainer').exists()).toBe(true);
    expect(wrapper.find('.adventureLogContainer').exists()).toBe(true);
  });
});
