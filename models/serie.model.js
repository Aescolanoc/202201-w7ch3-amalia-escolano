import mongoose from 'mongoose';

const serieSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    platform: {
        type: mongoose.Types.ObjectId,
        ref: 'Platform',
    },
});

serieSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});

export const Serie = mongoose.model('Serie', serieSchema);
