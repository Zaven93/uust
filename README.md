# uStudio Front-End Test Task

## Опис задачі

Вам потрібно реалізувати компонент `Disclosure`.
Він має складатися із двох частин – `Summary` та `Details`.

`Summary` має бути кнопкою із двома елементами всередині – "назвою" та іконкою.
`Details` має показувати основний контент, переданий через проп `children` компонента
`Disclosure`.

При натисканні на `Summary` мають відбуватися наступні речі:
- якщо компонент `Disclosure` закритий, то `Details` має розкриватися на всю свою висоту,
  показуючи контент усередині;
- якщо компонент `Disclosure` відкритий, то `Details` має закриватися, займаючи висоту 0
  та приховуючи контент усередині;

Детальніше із зовнішнім виглядом `Disclosure` можна ознайомитись [тут](https://www.figma.com/file/GgdQIStHOE3mAxpk2n18FF/uStudio-Front-End-Test-Task?node-id=0%3A1),
а із поведінкою [тут](https://www.figma.com/proto/GgdQIStHOE3mAxpk2n18FF/uStudio-Front-End-Test-Task?node-id=12%3A2&viewport=642%2C308%2C0.24902625381946564&scaling=min-zoom).

## Мінімальні вимоги

- компонент `Disclosure` має за зовнішнім виглядом і поведінкою повністю відповідати дизайн-макету
  та прототипу;
- компонент `Disclosure` має бути адаптивним до змін розмірів екрану/контейнеру/контенту.

## Бонусні вимоги

- використання **TypeScript**;
- використання **styled-components**;
- реалізація хендлерів подій `onClose`, `onOpen`, `onChange` – функцій, які мають
  викликатися **тільки** при зміні стану відкритості/закритості компоненту `Disclosure` та
  бути його пропсами;
- використання систем [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
  та [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) при роботі з репозиторієм.

## Як виконувати?

1. Робимо форк цього репозиторію та клонуємо до себе.
2. Весь функціонал та стилі компоненту `Disclosure` мають бути написані у модулі `/src/disclosure/`.
3. Для запуску цього проекту у режимі розробки треба використовувати скріпт `yarn start`.
4. Після виконання очікуємо посилання на форк цього репозиторію в узгоджений канал зв'язку.

## Що далі?

Це завдання, при виконанні мінімальних вимог, розраховано приблизно на 1.5–2 години часу.
Після того, як ми отримаємо від Вас посилання на виконане завдання, 
ми проведемо його внутрішню оцінку.

Якщо результат для нас буде позитивним, ми з Вами зв'яжемося і запропонуємо співбесіду, де,
окрім всього, детальніше поговоримо про Вашу реалізацію цього завдання.

Якщо ж Ваша реалізація нам не підійде, ми однаково з Вами зв'яжемося і дамо фідбек ;)

Незважаючи на результат, це тестове завдання може бути використано Вами в подальшому, цього ми
не забороняємо.
