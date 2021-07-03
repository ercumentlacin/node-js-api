const router = require('express').Router();
let data = require('../data');
const User = require('../data/data-model');

router.get('/', (req, res, next) => {
  User.findUser()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: 'Kullanıcılar alınırken hata oluştu.',
        error,
      });
    });
});

// yeni kullanıcı oluşturma
router.post('/', (req, res, next) => {
  const newUser = req.body;

  if (!newUser.name) {
    next({
      statusCode: 400,
      errorMessage: 'Kullanıcı eklemek için isim girmelisiniz ...',
    });
  } else {
    User.addUser(newUser)
      .then((added) => {
        res.status(201).json(added);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: 'Kullanıcı eklenirken bir hata oluştu ...',
          error,
        });
      });
  }
});

// kullanıcı silme
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  User.findUserById(id)
    .then((deletedUser) => {
      User.deleteUser(id)
        .then((deleted) => {
          if (deleted) {
            res.status(204).end();
          }
          next({
            statusCode: 400,
            errorMessage:
              'Silmeye calistiginiz kullanıcı sistemde mevcut degil.',
          });
        })
        .catch((error) => {
          next({
            statusCode: 500,
            errorMessage: 'Kullanıcı silinirken hata olustu.',
            error,
          });
        });
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: 'Kullanıcı bulunurken hata olustu.',
        error,
      });
    });
});

// kullanıcı edit
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  if (!updatedUser.name) {
    next({
      statusCode: 400,
      errorMessage: 'Kullanıcı ismi boş bırakılamaz',
    });
  } else {
    User.updateUser(updatedUser, id)
      .then((updated) => {
        res.status(200).json(updated);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: 'Kullanıcı düzenlenirken hata oluştu ...',
          error,
        });
      });
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findUserById(id)
    .then((user) => {
      user !== undefined
        ? res.status(200).json(user)
        : res
            .status(500)
            .json({
              errorMessage: 'Belirtilen ID ile bir kullanıcı bulunamadi.',
            });
    })
    .catch((e) => {
      res
        .status(404)
        .json({ errorMessage: 'Kullanıcı yuklenirken hata olustu', error: e });
    });
});

module.exports = router;
