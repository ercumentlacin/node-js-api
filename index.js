const express = require('express');
const usersRouter = require('./routers/usersRoute');
const logger = require('./middlewares/logger');
const errorHandling = require('./middlewares/errorHandling');

const server = express();
server.use(express.json());
server.use(logger);

server.use('/users', usersRouter);

server.get('/', (req, res) => {
  res.status(200).json({ server: 'up' });
});

// error handlibg
server.use(errorHandling);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`http://localhost:5000 adresinden gelen istekler dinleniyor ...`);
});
