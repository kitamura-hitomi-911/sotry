import { createList } from './List';

export default {
    title: 'ATOMS・MOLECULES/List'
};

const Template = ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createList({ ...args });
};

export const Normal = Template.bind({});

export const Note = Template.bind({});
Note.storyName='※';
Note.args = {
    sub: 'note'
};

export const Dot = Template.bind({});
Dot.storyName='・';
Dot.args = {
    sub: 'dot'
};
