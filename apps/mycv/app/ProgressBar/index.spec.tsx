import React from 'react';
import {render} from '@testing-library/react';
import {ProgressBar} from './index';

describe('ProgressBar', () => {
  it('should render correctly', () => {
    render(<ProgressBar colorScheme="javascript" fillingPercentage="60" title="title" />);

    expect(document.querySelector('.progressBar')).toBeTruthy();
    expect(document.querySelector('.title')).toBeTruthy();
    expect(document.querySelector('.title')).toHaveTextContent('title');
    expect(document.querySelector('.progress')).toBeTruthy();
    expect(document.querySelector('.filling')).toBeTruthy();
  });

  it('should render correctly for all fillingPercentages and colorSchemes', () => {
    const {rerender} = render(<ProgressBar colorScheme="javascript" fillingPercentage="60" title="title" />);
    expect(document.querySelector('.filling')).toHaveClass('filling filling60 colorjs');

    rerender(<ProgressBar colorScheme="java" fillingPercentage="85" title="title" />);
    expect(document.querySelector('.filling')).toHaveClass('filling filling85 colorjava');

    rerender(<ProgressBar colorScheme="springboot" fillingPercentage="85" title="title" />);
    expect(document.querySelector('.filling')).toHaveClass('filling filling85 colorsb');

    rerender(<ProgressBar colorScheme="react" fillingPercentage="75" title="title" />);
    expect(document.querySelector('.filling')).toHaveClass('filling filling75 colorreact');

    rerender(<ProgressBar colorScheme="typescript" fillingPercentage="85" title="title" />);
    expect(document.querySelector('.filling')).toHaveClass('filling filling85 colorts');
  });
});
