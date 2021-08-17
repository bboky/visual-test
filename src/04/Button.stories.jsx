import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Default = () => <Button>전송하기</Button>;
export const largeEx = () => <Button large>전송하기</Button>;
export const xlargeEx = () => <Button xlarge>전송하기</Button>;
export const smallEx = () => <Button small>전송하기</Button>;
export const xsmallEx = () => <Button xsmall>전송하기</Button>;
export const primaryEx = () => <Button primary>전송하기</Button>;
export const secondaryEx = () => <Button secondary>전송하기</Button>;
export const doubleEx = () => (
  <Button primary large>
    전송하기
  </Button>
);
