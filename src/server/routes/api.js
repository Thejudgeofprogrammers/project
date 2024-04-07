const express = require('express');
const router = express.Router();

const contentReg = 
`
  <p>Фамилия</p>
  <input type="text">
  <p>Имя</p>
  <input type="text">
  <p>Отчество</p>
  <input type="text">
  <p>Возраст</p>
  <input type="text">
  <p>Username</p>
  <input type="text">
  <p>Пароль</p>
  <input type="text">
  <p>Почта</p>
  <input type="text">
  <p>Согласие на обработку данных</p>
  <input type="checkbox"><br>
  <button>Зарегистрироватся</button>
`
const contentLoad = 
`
  <p>Username</p>
  <input type="text">
  <p>Пароль</p>
  <input type="text"><br>
  <button>Войти</button>
`

router.get('/', (req, res) => {
  res.render('index', {title: 'Ambrella'});
});

router.get('/registry', (req, res) => {
  res.render('reg_or_load', {title: 'Регистрация', content: contentReg, h: 'Регистрация'});
});

router.get('/load', (req, res) => {
  res.render('reg_or_load', {title: 'Вход', content: contentLoad, h: 'Вход'});
});

module.exports = router;