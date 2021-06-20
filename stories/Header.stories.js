import { createHeader } from './Header';

export default {
  title: 'organism/Header',
  argTypes: {
    is_logged_in:{ control: 'boolean' },
    notice_num:{ control: 'number' },
    onLogin: { action: 'onLogin' },
  },
};

const Template = (args) => createHeader(args);

export const Normal = Template.bind({});
Normal.args={
  is_logged_in:true,
  notice_num:10
}