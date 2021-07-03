const express = require('express');
let data = require('./data');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.get('/users', (req, res) => {
  res.status(200).json(data);
});

// yeni kullanıcı oluşturma
let next_id = 4;
server.post('/users', (req, res) => {
  let newUser = req.body;
  newUser.id = next_id;
  next_id++;
  data.push(newUser);
  res.status(201).json(newUser);
});

// kullanıcı silme
server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const deleteUser = data.find((user) => user.id === parseInt(id));
  const users = data.filter((user) => user.id !== parseInt(id));

  if (deleteUser) {
    res.send(users);
    res.status(204).end();
  } else {
    res
      .status(404)
      .json({ errorMessage: 'Silmeye çalıştığınız kullanıcı sistemde yok !' });
  }
});

// kullanıcı edit
server.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let thisUser = data.find((user) => user.id === parseInt(id));

  if (thisUser) {
    let users = data.filter((user) => user.id !== parseInt(id));
    thisUser = { ...thisUser, ...body };
    users = [...users, thisUser];
    res.send(users);
    res.status(200).end();
  } else {
    res
      .status(404)
      .json({ errorMessage: 'Silmeye çalıştığınız kullanıcı sistemde yok !' });
  }
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
