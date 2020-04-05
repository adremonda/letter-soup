const supertest = require('supertest')
const app = require('../src/app.js')

const request = supertest(app)

it('Should return return the number of ocurrence (8)', async done => {
    request
    .post('/ocurrence')
    .send({columns: 5, rows: 5, characters: 'EAEAEAIIIAEIOIEAIIIAEAEAE'})
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        expect(response.body.ocurrence).toEqual(8)
        done()
    })
    .catch(err => { 
        console.error(err);
        done(err); 
    })
})

it('Should return return the number of ocurrence (8)', async done => {
    request
    .post('/ocurrence')
    .send({columns: 5, rows: 5, characters: 'EAEAEAIIIAEIOIEAIIIAEAEAE'})
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect(200)
    .then(response => {
        expect(response.body.ocurrence).toEqual(8)
        done()
    })
    .catch(err => { 
        console.error(err);
        done(err); 
    })
})

it('Should return return the number of ocurrence (8)', async done => {
    request
    .post('/ocurrence')
    .send({columns: '5', rows: '5', characters: 'EAEAEAIIIAEIOIEAIIIAEAEAE'})
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        expect(response.body.ocurrence).toEqual(8)
        done()
    })
    .catch(err => { 
        console.error(err);
        done(err); 
    })
})

it('Should return return error of the param characters', async done => {
    request
    .post('/ocurrence')
    .send({columns: '7', rows: '5', characters: 'EAEAEAIIIAEIOIEAIIIAEAEAE'})
    .set('Accept', 'application/json')
    .expect(422)
    .then(response => {
        expect(response.body).toHaveProperty('errors')
        done()
    })
    .catch(err => { 
        console.error(err);
        done(err); 
    })
})
