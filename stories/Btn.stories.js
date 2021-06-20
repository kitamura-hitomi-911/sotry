import { createBtn } from './Btn';

export default {
  title: 'ATOMS・MOLECULES/Btn',
  argTypes: {
    label: { control: 'text' },
    no_link: { control: 'boolean' },
    theme: {
      options:['white', 'black'],
      control: {
        type: 'select',
        labels: {white: '白', black: '黒'}
        },
    },/*
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },*/
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  console.log(createBtn({ label, ...args }));
  return createBtn({ label, ...args });
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'ボタンラベル',
};

/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
