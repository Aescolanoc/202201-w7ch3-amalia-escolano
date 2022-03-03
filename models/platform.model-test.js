import mongoose from 'mongoose';
import { mongoConnect } from '../services/db.js';

export function platformCreator(modelName = 'Platform') {
    mongoConnect();
    const platformSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        pricePerMonth: { type: Number, required: true },
        series: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'series',
            },
        ],
    });

    let Platform;
    if (mongoose.default.models[modelName]) {
        Platform = mongoose.model(modelName);
    } else {
        Platform = mongoose.model(modelName, platformSchema);
    }

    return Platform;
}
