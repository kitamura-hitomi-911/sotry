import './assets/scss/_list.scss';
import BaseTemplete from './list.html'

export const createList = ({
    sub = ''
}) => {
    let parser = new DOMParser();
    const base = parser.parseFromString(BaseTemplete, "text/html");
    const ul = base.querySelector('.list');
    if(sub){
        ul.classList.add('list-'+ sub);
    }
    return ul;
};