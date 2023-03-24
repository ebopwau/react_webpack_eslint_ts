import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

describe('Test App Entry point', () => {
  it('should have an App! text', () => {
    const wrapper: ReactWrapper = mount(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
