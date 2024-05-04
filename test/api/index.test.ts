//  Library
import app from '../../src/app';
import { describe, test, expect } from 'vitest';
import request from 'supertest';

// Data
import { quotes } from '../../src/database';

describe('API', () => {

    test('GET /api/v1/quotes', async () => {
        await request(app)
            .get('/api/v1/quotes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, quotes);
    })

    test('GET /api/v1/quotes/random', async () => {
        await request(app)
            .get('/api/v1/quotes/random')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                expect(res.body).toBeDefined();
                expect(res.body).toBeTypeOf('object');
                expect(res.body).toHaveProperty('quote');
                expect(res.body).toHaveProperty('author');
            });
    })

    test('GET /api/v1/quotes/1', async () => {
        await request(app)
            .get('/api/v1/quotes/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, quotes[1]);
    })

    test('GET /api/v1/quotes/10000000', async () => {
        await request(app)
            .get('/api/v1/quotes/10000000')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404);
    })

    test('GET /api/v1/does-not-exist', async () => {
        await request(app)
            .get('/api/v1/does-not-exist')
            .expect('Content-Type', /json/)
            .expect(404);
    })

    test('responds with a 404 not found json message on a non-existing route', async () => {
        await request(app)
            .get('/api/v1/does-not-exist')
            .expect('Content-Type', /json/)
            .expect(404)
    })

})
