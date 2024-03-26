const request = require('supertest');

let server;
describe('/city',() => {
    beforEach(() => {server=""})
    afterEach(() => {server.close()});
    describe('GET /show-paramter/',() => {
            it('should create a new user',async () => {
            const res= await request(server).get('/city/show-paramter');
            expect(res.status).toBe(200);
     }); 
    });
});
