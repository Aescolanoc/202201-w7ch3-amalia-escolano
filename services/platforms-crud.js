export async function getAllPlatforms(Platform) {
    return await Platform.find({}).populate('series', { name: 1, _id: 0 });
}

export async function insertPlatform(platform, Platform) {
    const newPlatform = new Platform(platform);
    return await newPlatform.save();
}

export async function deletePlatform(id, Platform) {
    return await Platform.findByIdAndDelete(id);
}

export async function updatePlatform(id, partialPlatform, Platform) {
    return await Platform.findByIdAndUpdate(id, partialPlatform, {
        new: true,
    });
}
