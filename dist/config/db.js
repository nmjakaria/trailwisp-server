import mongoose from 'mongoose';
let isConnected = false;
export async function connectDB() {
    if (isConnected)
        return;
    const uri = process.env.MONGO_DB_URI;
    if (!uri)
        throw new Error('MONGO_DB_URI is not defined in .env');
    try {
        const db = await mongoose.connect(uri, { dbName: process.env.DB_NAME || 'trailwisp_db' });
        isConnected = db.connections[0]?.readyState === 1;
        // console.log('[db]: MongoDB connected');
    }
    catch (error) {
        console.error('[db]: Connection failed', error);
        throw error;
    }
}
//# sourceMappingURL=db.js.map