//import './page.css';
import { createHeader } from './Header';

export const createPage = ({ is_logged_in = true, notice_num = 0, onLogin }) => {
  const article = document.createElement('article');

  const header = createHeader({ is_logged_in, notice_num, onLogin });
  article.appendChild(header);
  const section = `
  <section>
    <h2>中身入ります。</h2>
    <p>
      中身入ります
    </p>
  </section>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
