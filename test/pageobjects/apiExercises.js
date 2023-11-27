import supertest from 'supertest';
class apiExercises {
  getDummyUsers() {
    supertest('https://dummyapi.io/data/v1/').get('/user');
  }
}
export default new apiExercises();
