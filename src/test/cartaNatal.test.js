import request from 'supertest'
import app from '../app'

test('should ', async() => {
        const response = await request(app)
        .post('/public/register')
        .send({
            email: "juniorsax3@gmail.com",
            password: "123456789"
        })

        expect(response.body)
 });

 test('should ', async() => {
    const response = await request(app)
    .post('/public/sigin')
    .send({
        email: "juniorsax3@gmail.com",
        password: "123456789"
    })

    expect(response.body)
});
