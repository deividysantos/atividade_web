import mongoose from "mongoose";

const db_host = "localhost";
const db_port = 27017;
const db_database = "livros";

const mongoURI = `mongodb:\/\/${db_host}:${db_port}/${db_database}`;

mongoose.connect(mongoURI)

export const db = mongoose.connection;

