const request = require('supertest')
const server = require('./index')
describe('Get Endpoints', () => {
    it('Get', async () => {
        const res = await request(server)
            .get('/')
            .send({
                userId: 1,
                title: 'testing',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name');
        return;
    })
})
afterAll(async () => {
    // close server conection
    server.close();
    return;
});