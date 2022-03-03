export async function getAllPlatforms(Platform) {
    return await Platform.find({}).populate('series', { name: 1 });
}

export async function insertPlatform(platform, Platform) {
    const newPlatform = new Platform(platform);
    return await newPlatform.save();
}

export async function deletePlatform(id, Platform) {
    return await Platform.findByIdAndDelete(id);
}
