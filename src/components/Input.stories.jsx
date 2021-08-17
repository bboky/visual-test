import React from 'react';

import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'name',
};

export const labelEx = Template.bind({});
labelEx.args = {
  name: 'name',
  label: '이름',
};

export const valueEx = Template.bind({});
valueEx.args = {
  name: 'name',
  label: '이름',
  value: '두잇',
};

export const autoFocusEx = () => <Input name="name" label="이름" value="두잇" autoFocus />;

export const errorMessageEx = Template.bind({});
errorMessageEx.args = {
  name: 'name',
  label: '이름',
  errorMessage: '이름을 입력해주세요',
};
