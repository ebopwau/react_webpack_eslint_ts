import React, { FC } from 'react';
import { DelightfulComponentContainer } from './DelightfulComponent.styled';

type TDelightfulComponent = {
    text: string,
}

export const DelightfulComponent: FC<TDelightfulComponent> = ({ text }) => (
  <DelightfulComponentContainer>
    { text }
  </DelightfulComponentContainer>
);
