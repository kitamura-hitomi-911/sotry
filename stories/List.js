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
    /*
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
    btn.addEventListener('click', onClick);

    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');

    btn.style.backgroundColor = backgroundColor;

    return btn;
    */
};