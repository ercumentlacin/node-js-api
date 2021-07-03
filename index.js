const express = require('express');
const usersRouter = require('./routers/usersRoute');
const logger = require('./middlewares/logger');
const errorHandling = require('./middlewares/errorHandling');

const server = express();
server.use(express.json());
server.use(logger);

server.use('/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

// error handlibg
server.use(errorHandling);

server.listen(5000, () => {
  console.log(`http://localhost:5000 adresinden gelen istekler dinleniyor ...`);
});
