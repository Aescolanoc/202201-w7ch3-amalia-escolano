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

platformSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});

export const Platform = mongoose.model('Platform', platformSchema);
