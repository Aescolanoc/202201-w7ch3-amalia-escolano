export async function getAllSeries(Serie) {
    return await Serie.find({}).populate('platform', { name: 1 });
}

export async function insertSerie(serie, Serie) {
    const newPlatform = new Serie(serie);
    return await newPlatform.save();
}

export async function deleteSerie(id, Serie) {
    return await Serie.findByIdAndDelete(id);
}
