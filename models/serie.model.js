import mongoose from 'mongoose';

const serieSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    platform: {
        type: mongoose.Types.ObjectId,
        ref: 'series',
    },
});

export const User = mongoose.model('series', serieSchema);
