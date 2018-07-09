const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const QuestionsController = require('./db/controllers/questionsController');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

server.use(bodyParser.json());

app.prepare().then(() => {

  server.get('/api', QuestionsController.greeting);
  server.post('/api/questions/new', QuestionsController.create);
  server.put('/api/questions/:id', QuestionsController.edit);
  server.delete('/api/questions/:id', QuestionsController.delete);

  server.get('*', (req, res) => {
    handle(req, res)
  });
  server.listen(3000);
});

module.exports = server;
