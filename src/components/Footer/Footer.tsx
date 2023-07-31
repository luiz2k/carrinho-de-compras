import s from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.by}>
        <p>
          Projeto pessoal feito por <strong>Luiz Teles</strong>
        </p>
      </div>

      <div className={s.moreInformation}>
        <ul>
          <span>Acesse também</span>
          <div>
            <li>
              <a href="https://github.com/luiz2k" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luiz2k/" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://portfolio-luiz2k.vercel.app" target="_blank" rel="noreferrer">
                Portfólio
              </a>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
}
