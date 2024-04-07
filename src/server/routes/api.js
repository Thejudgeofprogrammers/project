const express = require('express');
const fs = require('fs');
const router = express.Router();
const { contentReg, contentLoad } = require('./content/content.js')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('index', {title: 'Ambrella'});
});

router.get('/registry', (req, res) => {
  res.render('reg_or_load', {title: 'Регистрация', content: contentReg, h: 'Регистрация'});
});

router.get('/load', (req, res) => {
  res.render('reg_or_load', {title: 'Вход', content: contentLoad, h: 'Вход'});
});

router.post('/registry/submit', (req, res) => {
  const userData = req.body
  userData.Date = new Date();
  console.log(userData)
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync('./bdJson/bd.json', 'utf8'));
  } catch (err) {
    console.error("Ошибка чтения файла", err);
  };
  if (existingData.length !== 0) {
    userData.usrId = existingData[existingData.length - 1].usrId + 1;
  } else {
    userData.usrId = 1;
  };
  existingData.push(userData);
  console.log(existingData)
  fs.writeFile('./bdJson/bd.json', JSON.stringify(existingData, null, 2) , { encoding: 'utf-8'}, (err) => {
    if (err) {
      console.error('Ошибка записи файла', err);
      res.status(500).send('Ошибка сохранения в бд');
    } else {
      console.log('Данные успешно сохранены в бд');
      res.status(200).send('Успешное сохранение в бд');
    }
  })
})

module.exports = router;