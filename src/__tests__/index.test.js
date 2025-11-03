const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with Hello Krusty Burger!', (done) => {
    request(app)
      .get('/')
      .expect('Hello Krusty Burger!', done);
  });
});