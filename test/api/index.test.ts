//  Library
import app from '../../src/app';
import { describe, test } from 'vitest';
import request from 'supertest';

describe('API', () => {

    test('GET /api/v1/greet/:id', async () => {
        await request(app)
            .get('/api/v1/greet/25')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                message: "Hello, 25!"
            })
    })

})
