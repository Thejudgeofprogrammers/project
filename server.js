const express = require('express');
const mysql = require('mysql');

const app = exrpess();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

connection.connect();

app.get('/', (req, res) => {
  connection.query('SELECT * FROM mytable', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});