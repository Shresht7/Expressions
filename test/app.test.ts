//  Library
import app from '../src/app';
import { describe, test } from 'vitest';
import request from 'supertest';

describe('app', () => {

    test('responds with a 404 not found message on a non-existing route', async () => {
        await request(app)
            .get('/does-not-exist')
            .expect(404)
    })

    test('GET /', async () => {
        await request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
    })

})
