import request from 'supertest';
import { app, server } from '../index.js';
import { tasksConnect } from '../services/db.js';
import data from '../services/task.data.js';

describe('Given the test database with a initial state', () => {
    const collection = '';
    let Task;
    beforeEach(async () => {
        ({ Task } = await tasksConnect(collection));
        await Task.deleteMany({});
        const result = await Task.insertMany(data.tasks);
        console.log(result[0].id);
    });

    afterEach(() => {
        // connection.disconnect();
        server.close();
    });

    describe('When the request is GET /tasks', function () {
        test('responds with json', async function () {
            const response = await request(app).get('/tasks');
            expect(response.statusCode).toBe(200);
        });
    });

    describe('When the request is GET /tasks/:id', function () {
        test('responds with json', async function () {
            const response = await request(app).get('/tasks');
            expect(response.statusCode).toBe(200);
        });
    });

    describe('DELETE /tasks', function () {
        // test('responds with json', async function () {
        //     const response = await request(app).delete('/tasks/12');
        //     expect(response.statusCode).toBe(406);
        // });
    });
});
