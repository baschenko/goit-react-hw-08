import { Link } from '@mui/material';
import PageTitle from '../../components/PageTitle/PageTitle';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Вітаю у застосунку Менеджер Контактів
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p className={s.text}>
        Після реєстрації у Вас буде можливість створити та зберігати свій
        особистий список контактів.
      </p>
      <h3 className={s.text}>
        <b>Розробник:</b> Віталій Бащенко
      </h3>
      <p className={s.text}>
        Якщо помітили помилку звертйтесь у <b>Телеграм: </b>
        <Link href="https://t.me/vitaly_bash" target="_blank" underline="hover">
          Сюди
        </Link>
      </p>
    </div>
  );
}
