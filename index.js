const express = require('express');
const data = require('./data');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.get('/users', (req, res) => {
  res.status(200).json(data);
});

server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = data.find((user) => user.id === parseInt(id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('Aradığınız kullanıcı bulunamadı ...');
  }
});

server.listen(5000, () => {
  console.log(`http://localhost:5000 adresinden gelen istekler dinleniyor ...`);
});
