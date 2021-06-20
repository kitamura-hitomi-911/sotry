import './assets/scss/_btn.scss';

export const createBtn = ({
  no_link = false,
  size = 'medium',
  label,
  onClick,
}) => {
  const btn = document.createElement('p');
  let a;
  if(!no_link){
    a = document.createElement('a')
    a.href="#";
    // a のリンクで遷移しないようにする
    a.addEventListener('click', e => {e.preventDefault();return onClick(e);});
  }else{
    a = document.createElement('span');
    a.className = 'btn-no_link';
  }
  a.innerText = label;
  btn.appendChild(a);



  const class_name_ary = ['btn'];
  if(no_link){
    class_name_ary.push('is-disable');
  }
  btn.className = class_name_ary.join(' ');

  return btn;
};
