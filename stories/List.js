import './assets/scss/_list.scss';

export const createList = ({
    sub = '',
    onHover
}) => {
    const class_value = 'list' + (sub ? ' list-'+ sub : '');
    return `<ul class="${class_value}">
    <li>テキスト１</li>
    <li>テキスト２</li>
    <li>テキスト２テキスト２テキスト２テキスト２テキスト２テキスト２テキスト２テキスト２</li>
</ul>`
};