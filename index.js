const express = require('express');
const usersRouter = require('./routers/usersRoute');

const server = express();
server.use(express.json());
server.use('/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.listen(5000, () => {
  console.log(`http://localhost:5000 adresinden gelen istekler dinleniyor ...`);
});
