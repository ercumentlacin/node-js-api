const router = require('express').Router();
let data = require('../data');

router.get('/', (req, res) => {
  res.status(200).json(data);
});

// yeni kullanıcı oluşturma
let next_id = 4;
router.post('/', (req, res, next) => {
  let newUser = req.body;

  if (newUser.name) {
    newUser.id = next_id;
    next_id++;
    data.push(newUser);
    res.status(201).json(newUser);
  } else {
    //   error handling
    next({
      statusCode: 400,
      errorMessage: 'Kullanıcı eklemek için isim girmelisiniz ...',
    });
  }
});

// kullanıcı silme
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteUser = data.find((user) => user.id === parseInt(id));
  data = data.filter((user) => user.id !== parseInt(id));

  if (deleteUser) {
    res.send(data);
    res.status(204).end();
  } else {
    res
      .status(404)
      .json({ errorMessage: 'Silmeye çalıştığınız kullanıcı sistemde yok !' });
  }
});

// kullanıcı edit
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let thisUser = data.find((user) => user.id === parseInt(id));

  if (thisUser) {
    data = data.filter((user) => user.id !== parseInt(id));
    thisUser = { ...thisUser, ...body };
    data = [...data, thisUser];
    res.send(data);
    res.status(200).end();
  } else {
    res
      .status(404)
      .json({ errorMessage: 'Silmeye çalıştığınız kullanıcı sistemde yok !' });
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = data.find((user) => user.id === parseInt(id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('Aradığınız kullanıcı bulunamadı ...');
  }
});

module.exports = router;
