import { expect, test, describe } from "bun:test";
import app from "#app";
import request from "supertest"


describe('Base test suite', () => {
    test('tests /private/base/test endpoint', async () => {
        const response = await request(app)
            .post('/private/base/test')
            .send({
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJiaGlldTc5QGdtYWlsLmNvbSIsImlhdCI6MTcwMDU0MjYyMCwiZXhwIjoxNzMyMDc4NjIwfQ.7cuDI2zDPZLUlbymcG2iKOBUlQgPxVlPWnNUrpuanS0"
            }
            );
        expect(response.statusCode).toBe(200);
        expect(response.body?.data).toEqual("bhieu79@gmail.com")
    });
    test('tests /private/base/generateJWT endpoint', async () => {
        const response = await request(app)
            .post('/public/base/generateJWT')
            .send({
                "email": "bhieu79@gmail.com"
            }
            );
        expect(response.statusCode).toBe(200);
        expect(response.body?.data).not.toBe(null);
    });
});
