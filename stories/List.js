import './assets/scss/_list.scss';
import BaseTemplete from './list.html'
import copyCodeBlock from '@pickra/copy-code-block';
import copyCodeBlockOption from './copyCodeBlockOption';

export const createList = ({
    sub = ''
}) => {
    const ret = document.createElement('div');
    let parser = new DOMParser();
    const base = parser.parseFromString(BaseTemplete, "text/html");
    const ul = base.querySelector('.list');
    if(sub){
        ul.classList.add('list-'+ sub);
    }
    ret.appendChild(ul);
    ret.appendChild( copyCodeBlock(ul.outerHTML,copyCodeBlockOption));
    return ret;
};