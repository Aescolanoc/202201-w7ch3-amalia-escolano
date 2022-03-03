import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWORD;
    const dbName = process.env.DBNAMETEST;
    const uri = `mongodb+srv://${user}:${password}@cluster0.vdfih.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}
