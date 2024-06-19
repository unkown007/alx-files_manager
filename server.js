import Routes from './routes';

const express = require('express');

const server = express();
const PORT = process.env.PORT || 5000;

Routes(server);

server.listen(PORT, () => {
  process.stdout.write(`Server running on port ${PORT}\n`);
});

export default server;
