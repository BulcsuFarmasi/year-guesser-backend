import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

let database;

export default async function getDatabase() {
    const databaseName = "year_guesser"
    if (database) {
        return database;
    } else {
        await client.connect();

        database = client.db(databaseName);

        return database;
    }
}