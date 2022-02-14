import React from 'react';
import {shallow} from 'enzyme';
import {ProgressBar} from './index';

describe('ProgressBar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ProgressBar colorScheme="javascript" fillingPercentage="60" title="title" />);
    expect(wrapper.find('.progressBar').exists()).toBe(true);
    expect(wrapper.find('.progressBar').hasClass('progressBar')).toBe(true);
    expect(wrapper.find('.title').exists()).toBe(true);
    expect(wrapper.find('.title').text()).toBe('title');
    expect(wrapper.find('.progress').exists()).toBe(true);
    expect(wrapper.find('.filling').exists()).toBe(true);
  });

  it('should render correctly for all fillingPercentages and colorSchemes', () => {
    let wrapper = shallow(<ProgressBar colorScheme="javascript" fillingPercentage="60" title="title" />);
    let lastDiv = wrapper.find('div').last();
    expect(lastDiv.hasClass('filling filling60 colorjs')).toBe(true);

    wrapper = shallow(<ProgressBar colorScheme="react" fillingPercentage="75" title="title" />);
    lastDiv = wrapper.find('div').last();
    expect(lastDiv.hasClass('filling filling75 colorreact')).toBe(true);

    wrapper = shallow(<ProgressBar colorScheme="java" fillingPercentage="85" title="title" />);
    lastDiv = wrapper.find('div').last();
    expect(lastDiv.hasClass('filling filling85 colorjava')).toBe(true);

    wrapper = shallow(<ProgressBar colorScheme="springboot" fillingPercentage="85" title="title" />);
    lastDiv = wrapper.find('div').last();
    expect(lastDiv.hasClass('filling filling85 colorsb')).toBe(true);
    wrapper = shallow(<ProgressBar colorScheme="typescript" fillingPercentage="85" title="title" />);

    lastDiv = wrapper.find('div').last();
    expect(lastDiv.hasClass('filling filling85 colorts')).toBe(true);
  });
});
