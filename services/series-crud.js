export async function getAllSeries(Serie) {
    return await Serie.find({});
}

export async function insertSerie(serie, Serie) {
    const newSerie = new Serie(Serie);
    return await newSerie.save();
}

export async function deleteSerie(id, Serie) {
    return await Serie.findByIdAndDelete(id);
}
