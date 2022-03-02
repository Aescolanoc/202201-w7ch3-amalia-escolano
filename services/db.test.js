import { mongoConnect } from './db.js';
import * as dotenv from 'dotenv';

dotenv.config();

describe('Testing DB.js', function () {
    test('calling the function mongoConnect have a property ', async () => {
        const connect = await mongoConnect();
        expect(connect.connections[0]).toHaveProperty(
            'name',
            process.env.DBNAME
        );
    });
});
