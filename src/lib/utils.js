import mongoose from "mongoose";

const connection = {}

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("New database connection established");
    } catch (error) {
        // handleError(error);
        console.log(error)
        throw new Error(error)
    }
}