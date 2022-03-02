export async function getAllPlatform(Platform) {
    return await Platform.find({});
}

export async function insertPlatform(platform, Platform) {
    const newPlatform = new Platform(Platform);
    return await newPlatform.save();
}

export async function deletePlatform(id, Platform) {
    return await Platform.findByIdAndDelete(id);
}
