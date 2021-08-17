import React from 'react';

import Text from './Text';

export default {
  component: Text,
  title: 'Text',
};

export const Default = () => <Text>안녕하세요</Text>;
export const largeEx = () => <Text large>안녕하세요</Text>;
export const xlargeEx = () => <Text xlarge>안녕하세요</Text>;
export const smallEx = () => <Text small>안녕하세요</Text>;
export const xsmallEx = () => <Text xsmall>안녕하세요</Text>;
export const primaryEx = () => <Text primary>안녕하세요</Text>;
export const secondaryEx = () => <Text secondary>안녕하세요</Text>;
export const doubleEx = () => (
  <Text primary large>
    안녕하세요
  </Text>
);
