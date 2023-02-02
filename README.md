# Фронтенд Диплома Movies Explorer
### *Дипломный проект от [Яндекс.Практикум](https://practicum.yandex.ru/web/)*

## Описание проекта
Movies Explorer - проект выполненный мной как дипломный проект в в рамках обучения на Яндекс.Практикум.

## Функционал:
- Роуты для пользователей:
  - GET /users/me — возвращает информацию о пользователе;
  - PATCH /users/me — обновляет информацию о пользователе.

- Роуты для фильмов:
  - GET /movies — возвращает все фильмы из базы;
  - POST /movies — создаёт фильм с переданными в теле запроса country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU и nameEN;
  - DELETE /movies/:movieId — удаляет фильм по _id.

## Стек технологий:
- JavaScript:
  - Промисы (Promise);
  - Асинхронность и оптимизация;
  - Rest API;
- Node.js;
- Express;
- MongoDB;
- Сelebrate;
- Winston.

## Установка и запуск проекта:
Клонировать репозиторий:

    git clone https://github.com/Mihail958/movies-explorer-api.git

Установить зависимости:

    npm install

Запустить сервер:

    npm run start

Запустить сервер с hot-reload:

    npm run dev

## Языки:
- JavaScript

## Библиотеки:
- Express

## База данных:
- MongoDB

## Ссылки:
- адрес сервера http://diploma.mikhail.nomoredomains.sbs/
