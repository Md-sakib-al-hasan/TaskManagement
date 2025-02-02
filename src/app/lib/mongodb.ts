import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // Import bcrypt
import User from "@/src/app/models/user";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable.");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };

async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "organization",
        }).then(async (mongooseInstance) => {

            if (mongooseInstance.connection.readyState !== 1) {
                throw new Error("MongoDB connection is not fully established.");
            }

            const db = mongooseInstance.connection.db;
            if (!db) {
                throw new Error("MongoDB database instance is not available.");
            }

            const collections = await db.listCollections().toArray();
            const usersCollectionExists = collections.some(col => col.name === "users");

            if (!usersCollectionExists) {
                const hashedPassword = await bcrypt.hash(process.env.ADMINPASSWORD as string, 8);
                await User.create({
                    name: process.env.NAME,
                    email: process.env.ADMINEMAIL,
                    password: hashedPassword, 
                    role: "admin",
                });
                console.log("✅ Default admin user created.");
            }

            return mongooseInstance;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
