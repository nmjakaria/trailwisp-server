import mongoose from 'mongoose';

export async function connectDB(): Promise<void> {
    const uri = process.env.MONGO_DB_URI;
    if (!uri) throw new Error('MONGO_DB_URI is not defined in .env');
    try {
        await mongoose.connect(uri, { dbName: process.env.DB_NAME || 'trailwisp_db' });
        console.log('[db]: MongoDB connected');
    } catch (error) {
        console.error('[db]: Connection failed', error);
        process.exit(1);
    }
}