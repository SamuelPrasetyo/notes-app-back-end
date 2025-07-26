const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHander,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handler.getUserByIdHandler,
  }
];

module.exports = routes;