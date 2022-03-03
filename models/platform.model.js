import mongoose from 'mongoose';

export const platformSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    pricePerMonth: { type: Number, required: true },
    series: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Serie',
        },
    ],
});

export const Platform = mongoose.model('Platform', platformSchema);
