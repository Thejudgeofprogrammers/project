let users = {};
let pushButton = document.querySelector('#pushButton');
const hf = document.querySelector('#fl');

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
    const name1 = validateName(name.value);
    const lastName1 = validateName(lastName.value);
    const fatherName1 = validateFather(fatherName.value);
    const old1 = old.value.trim() ? old.value : null;
    const userName1 = validateUserName(userName.value);
    const password1 = validatePassword(password.value);
    const mail1 = validateMail(mail.value);
    const radio1 = radio.checked ? radio.value : null;
    const user = new makeReg(name1, lastName1, fatherName1, old1, userName1, password1, mail1, radio1);
    validateData(user);
  });
};
function validateData(user) {
  const {name, lastName, fatherName, old, userName, password, mail, radio} = user;
  if (name !== null && lastName !== null && fatherName !== null && old !== null && userName !== null && password !== null && mail !== null && radio !== null) {
    getDataToServer(user);
  } else {
    console.log('Вы не заполнили все данные')
  }
};

function validateOld(old) {
  if (old < 12 || old > 120 || old.includes(' ')) {
    console.log('Некорректный возраст');
    return null;
  }
  if (!old.includes('1234567890')) {
    console.log('Возраст должен состоять только из цифр');
    return null;
  }
  return old;
}

function validateName(name) {
  name = name.trim();
  if (name.length <= 2 || name.includes('1234567890') || name.includes(' ')) {
    console.log('Неверно указанно ФИО или там содержатся цифры');  
    return null;
  } else {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
}

function validateFather(fatherName) {
  fatherName = fatherName.trim();
  if (fatherName.length === 0) return false;
  if (fatherName.length <= 2 || fatherName.includes('1234567890') || fatherName.includes(' ')) {
    console.log('Неверно указанно Отчество или там есть цифры');  
    return null;
  } else {
    return fatherName.charAt(0).toUpperCase() + fatherName.slice(1).toLowerCase();
  };
}

function validateUserName(userName) {
  userName = userName.trim();
  const regex = /^[a-zA-Z0-9_-]+$/;

  if (userName.length <= 4) {
    console.log('Логин слишком короткий');
    return null
  };
  if (!regex.test(userName)) {
    console.log('Логин должен состоять из английских символов');
    return null;
  };
  if (userName.includes(' ')) {
    console.log('В вашем логине есть пробелы');
    return null;
  };
  return userName;
}

function validatePassword(password) {
  password = password.trim();
  if (password.length <= 6 || password.includes(' ')) {
    console.log('Пароль слишком короткий');
    return null;
  };
    return password;
}

function validateMail(mail) {
  mail = mail.trim();
  if (mail.length <= 4 || !mail.includes('@') || !mail.includes('.') || mail.includes(' ')) {
    console.log('Неверно указанна почта');
    return null;
  }
  return mail;
}

function getDataToServer(user) {
  console.log(user)
  const userData = {
    name: user.name,
    lastName: user.lastName,
    fatherName: user.fatherName,
    old: user.old,
    userName: user.userName,
    password: user.password,
    mail: user.mail,
  };

  fetch('/registry/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Ошибка при отправке данных');
  })
  .then(data => {
    console.log(data);
    if (data.error) {
      if (data.error === 'mail') {
        alert('Данный email уже используется');
      };
      if (data.error === 'userName') {
        alert('Данный логин уже зарегистрирован');
      };
    } else {
      window.location.href = '/';
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
}
