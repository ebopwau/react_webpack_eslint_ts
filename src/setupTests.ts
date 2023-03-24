import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from '@cfaester/enzyme-adapter-react-18';

import 'jest-styled-components';

global.React = React;

console.error = () => {};
console.warn = () => {};

Enzyme.configure({ adapter: new EnzymeAdapter() });
