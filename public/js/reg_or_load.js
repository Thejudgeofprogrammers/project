let users = {};
let pushButton = document.querySelector('#pushButton');

if (window.location.href.includes('load')) {
  let userName = document.querySelector('#userName');
  let password = document.querySelector('#password');

  function makeload(userName, password) {
    this.userName = userName;
    this.password = password;
  };

  pushButton.addEventListener('click', () => {
    const userName1 = userName.value;
    const password1 = password.value;
  
    const user = new makeload(userName1, password1);
  });
};
if (window.location.href.includes('registry')) {
  let name = document.querySelector('#name');
  let lastName = document.querySelector('#lastName');
  let fatherName = document.querySelector('#fatherName');
  let old = document.querySelector('#old');
  let userName = document.querySelector('#userName');
  let password = document.querySelector('#password');
  let mail = document.querySelector('#mail');
  let radio = document.querySelector('#radio');
  
  function makeReg(name, lastName, fatherName, old, userName, password, mail, radio) {
    this.name = name;
    this.lastName = lastName;
    this.fatherName = fatherName;
    this.old = old;
    this.userName = userName;
    this.password = password;
    this.mail = mail;
    this.radio = radio;
  };

  pushButton.addEventListener('click', () => {
    const name1 = validateName(name.value) ? name.value : null;
    const lastName1 = validateName(lastName.value) ? lastName.value : null;
    const fatherName1 = validateName(fatherName.value) ? fatherName.value : false;
    const old1 = old.value.trim() ? old.value : null;
    const userName1 = validateUserName(userName.value) ? userName.value : null;
    const password1 = validatePassword(password.value) ? password.value : null;
    const mail1 = validateMail(mail.value) ? mail.value : null;
    const radio1 = radio.checked ? radio.value : null;
    const user = new makeReg(name1, lastName1, fatherName1, old1, userName1, password1, mail1, radio1);
    const userId = 'User' + createId(users);
    users[userId] = user;
    getDataToServer(user, userId);
  });
};

function createId(users) {
  return Object.keys(users).length;
}

function validateName(name) {
  name = name.trim().toLowerCase();
  if (name.length <= 2) return null;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function validateUserName(userName) {
  userName = userName.trim();
  if (userName.length <= 4) return null;
  return userName;
}

function validatePassword(password) {
  password = password.trim();
  if (password.length <= 6) return null;
  return password;
}

function validateMail(mail) {
  mail = mail.trim();
  if (mail.length <= 6) return null;
  return mail;
}

function getDataToServer(user, userId) {
  // Извлекаем данные из объекта users
  const userData = {
    name: user.name,
    lastName: user.lastName,
    fatherName: user.fatherName,
    old: user.old,
    userName: user.userName,
    password: user.password,
    mail: user.mail,
    radio: user.radio
  };
  // Отправляем данные на сервер
  fetch('/registry/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Ошибка при отправке данных');
  })
  .then(data => {
    console.log('Данные успешно отправлены на сервер', data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
}
