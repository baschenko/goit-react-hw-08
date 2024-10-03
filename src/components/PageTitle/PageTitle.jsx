import s from './PageTitle.module.css';

export default function PageTitle({ children }) {
  return <h1 className={s.heading}>{children}</h1>;
}
