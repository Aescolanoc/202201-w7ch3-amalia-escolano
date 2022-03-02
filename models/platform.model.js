import mongoose from 'mongoose';

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

export const Platform = mongoose.model('platforms', platformSchema);
