import { createPage } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Templates/Page',
  argTypes: {
    is_logged_in:{ control: 'boolean' },
    notice_num:{ control: 'number' },
    onLogin: { action: 'onLogin' },
  },
};

const Template = (args) => createPage(args);

export const LoggedIn = Template.bind({});
LoggedIn.storyName='ログイン済み';
LoggedIn.args = {
  is_logged_in:true
};

export const LoggedOut = Template.bind({});
LoggedOut.storyName='未ログイン';
LoggedOut.args = {
  is_logged_in:false
};
