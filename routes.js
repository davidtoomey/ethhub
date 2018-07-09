// notice the second set of parentheses
// means the require function returns a function
// function will be invoked immediately after being required into this file
const routes = require('next-routes')();

routes
  .add('/questions/new', '/questions/new')
  .add('/questions/:address', '/questions/show')
  .add('/questions/:address/answers', '/questions/answers/index');

module.exports = routes;
