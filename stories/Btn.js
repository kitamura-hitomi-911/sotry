import './assets/scss/_btn.scss';
import copyCodeBlock from '@pickra/copy-code-block';
import ScriptTemplete from './btn.html'

export const createBtn = ({
  no_link = false,
  size = 'medium',
  label,
  onClick,
}) => {
  const ret = document.createElement('div');
  const btn = document.createElement('p');
  let a;
  if(!no_link){
    a = document.createElement('a')
    a.href="#";
    // a のリンクで遷移しないようにする
    a.addEventListener('click', e => {
      e.preventDefault();
      console.log(vm_test);
          vm_test.show();
      return onClick(e);
    });
  }else{
    a = document.createElement('span');
    a.className = 'btn-no_link';
  }
  a.innerText = label;
  btn.appendChild(a);

  ret.insertAdjacentHTML('beforeend', ScriptTemplete);

  const class_name_ary = ['btn'];
  if(no_link){
    class_name_ary.push('is-disable');
  }
  btn.className = class_name_ary.join(' ');
  ret.appendChild(btn);
  ret.appendChild( copyCodeBlock(btn.innerHTML,{ shouldReturnDomEl: true}));

  return ret;
};
