import supertest from 'supertest';
let apiResponse;
class ApiExercises {
  async getDummyUsers(path, expectedStatus) {
    apiResponse = await supertest('https://dummyapi.io')
      .get(path)
      .set({
        'Content-Type': 'application/json',
        'app-id': '656464283cd4b9f9f045318c',
      })
      .expect(parseInt(expectedStatus));
    console.log(apiResponse.body);
  }

  async getMethod(endPoint, pathId) {
    apiResponse = await supertest('https://dummyapi.io')
      .get(`${endPoint}${pathId}`)
      .set({
        'Content-Type': 'application/json',
        'app-id': '6565a64b90fff7d4682719d8',
      })
      .expect(parseInt('200'));
    console.log(apiResponse.body);
  }

  async sendRequest(requestData) {
    switch (requestData.requestMethod) {
      case 'POST':
        apiResponse = await supertest(requestData.baseURL)
          .post(requestData.path)
          .send(requestData.body)
          .set(JSON.parse(requestData.headers))
          .expect(parseInt(requestData.status));
        console.log(apiResponse.body);
        break;
      case 'GET':
        apiResponse = await supertest(requestData.baseURL)
          .get(requestData.path)
          .set(JSON.parse(requestData.headers))
          .expect(parseInt(requestData.status));
        console.log(apiResponse.body);
        break;
      default:
        throw new Error('Please use GET or POST methods');
    }
  }

  async deleteMethod() {
    let pathId = '656f035af8937f1ed7dde951';
    apiResponse = await supertest('https://dummyapi.io/data/v1')
      .delete(`/user/${pathId}`)
      .set({
        'Content-Type': 'application/json',
        'app-id': '6565a64b90fff7d4682719d8',
      })
      .expect(parseInt('200'));
    console.log(apiResponse);
  }

  async putMethod() {
    let pathId = '6565e8a268db2670dbae2366';
    let body = {
      firstName: 'Maria3',
      lastName: 'Sno3',
    };
    apiResponse = await supertest('https://dummyapi.io/data/v1')
      .patch(`/user/${pathId}`)
      .send(body)
      .set({
        'Content-Type': 'application/json',
        'app-id': '6565a64b90fff7d4682719d8',
      })
      .expect(parseInt('200'));
    console.log(apiResponse.body);
  }
}
export default new ApiExercises();
