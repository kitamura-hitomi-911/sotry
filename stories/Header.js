import './assets/scss/_header.scss';
import BaseTemplete from './header.html'

export const createHeader = ({ is_logged_in = true, notice_num = 0, onLogin }) => {
  let parser = new DOMParser();
  const base = parser.parseFromString(BaseTemplete, "text/html");
  const header = base.querySelector('.header');
  const mypage_a = header.querySelector('.header-mypage > a');
  if(is_logged_in){
    if(notice_num){
      const notice = document.createElement('span');
      notice.innerText=notice_num;
      notice.className="mypage-notice_num";
      mypage_a.appendChild(notice);
    }
    mypage_a.addEventListener('click', e => {e.preventDefault();});
  }else{
    mypage_a.addEventListener('click', e => {e.preventDefault();return onLogin(e);});
  }

  return header;
};
