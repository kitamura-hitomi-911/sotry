import './assets/scss/_layout.scss';
import BaseTemplete from './page.html'
import { createHeader } from './Header';

export const createPage = ({ page, is_logged_in = true, notice_num = 0, onLogin }) => {
  let parser = new DOMParser();
  const base = parser.parseFromString(BaseTemplete, "text/html");
  const wrapper = base.querySelector('.l-wrapper');

  const l_header_inner = wrapper.querySelector('.l-header-inner');
  const l_content_inner = wrapper.querySelector('.l-content-inner');

  const header = createHeader({ is_logged_in, notice_num, onLogin });
  l_header_inner.appendChild(header);

  const section = `
  <section>
    <h2>中身入ります。</h2>
    <p>
      中身入ります
      <img src="./test.jpg" alt="">
    </p>
  </section>
`;

  l_content_inner.insertAdjacentHTML('beforeend', section);

  return wrapper;
};
