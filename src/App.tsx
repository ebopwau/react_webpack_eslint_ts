import React from 'react';

import { DelightfulComponent } from 'components';
import { GlobalStyle } from './Global.styled';

const App = () => (
  <>
    <GlobalStyle />
    <DelightfulComponent text="App!" />
  </>
);

export default App;
