const contentReg = 
`
  <p>Фамилия</p>
  <input type="text" id="name">
  <p>Имя</p>
  <input type="text" id="lastName">
  <p>Отчество</p>
  <input type="text" id="fatherName">
  <p>Возраст</p>
  <input type="text" id="old">
  <p>Username</p>
  <input type="text" id="userName">
  <p>Пароль</p>
  <input type="text" id="password">
  <p>Почта</p>
  <input type="text" id="mail">
  <p>Согласие на обработку данных</p>
  <input type="checkbox" id="radio"><br>
  <button id="pushButton"><a href="/">Зарегистрироватся</a></button>
`
const contentLoad = 
`
  <p>Username</p>
  <input type="text">
  <p>Пароль</p>
  <input type="text"><br>
  <button>Войти</button>
`

module.exports = {
  contentLoad,
  contentReg
};