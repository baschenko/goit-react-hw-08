import PageTitle from '../../components/PageTitle/PageTitle';

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Вітаю у застосунку Менеджер Контактів{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>
        Після реєстрації у Вас буде можливість створити та зберігати свій
        особистий списко контактів.
      </p>
      <p> Розробник: Віталій Бащенко </p>
    </div>
  );
}
