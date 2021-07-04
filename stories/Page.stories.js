import { createPage } from './Page';

export default {
  title: 'Page',
  argTypes: {
    page:{
      control:'select',
      options: ['TOP', 'ProductDetail'],
    },
    is_logged_in:{ control: 'boolean' },
    notice_num:{ control: 'number' },
    onLogin: { action: 'onLogin' },
  },
  parameters:{
    layout:'fullscreeen'
  }
};

const Template = (args) => createPage(args);

export const LoggedIn = Template.bind({});
LoggedIn.storyName='TOP';
LoggedIn.args = {
  page:'TOP',
  is_logged_in:true,
  notice_num:10
};
