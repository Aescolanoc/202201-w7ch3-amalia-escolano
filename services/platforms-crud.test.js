import * as platformSrv from './platforms-crud.js';
import Platform from '../models/platform.model.js';
import { mongoConnect } from '../services/Testing-db.js';

describe('when a collection is defined and populated', () => {
    let platformModel;
    let initialCount = 1;
    let first_id;

    beforeAll(async () => {
        await mongoConnect();
        platformModel = Platform;
    });

    afterAll(async () => {
        await platformModel.deleteMany({ name: 'Test platform 1' });
    });

    test('should connect to the collection', async () => {
        expect(platformModel).toBeTruthy();
        expect(platformModel.modelName).toBe('platforms');
    });

    test('should create a platform', async () => {
        const platform = {
            name: 'Test platform 1',
            pricePerMonth: 20,
            series: [],
        };

        const result = await platformSrv.insertPlatform(
            platform,
            platformModel
        );
        first_id = result._id;
        expect(result.pricePerMonth).toBe(20);
        expect(result.name).toBe('Test platform 1');
    });

    test('should get all the platforms', async () => {
        const result = await platformSrv.getAllPlatform(platformModel);
        expect(result.length).toBe(initialCount);
    });

    test('should delete one platform', async () => {
        await platformSrv.deletePlatform(first_id, platformModel);
        const isDeleted = platformModel.findById(first_id);
        expect(isDeleted).toBeTruthy();
    });
});
