import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    passwd: { type: String, required: true },
    isAdmin: { type: Boolean },
    watchedSeries: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Serie',
        },
    ],
});
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
        delete returnedObject.passwd;
    },
});

export const User = mongoose.model('users', userSchema);
