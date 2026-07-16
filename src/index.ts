import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import routes from './routes/index.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app: Express = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());

// প্রতিটা রিকোয়েস্টে DB connect আছে কিনা নিশ্চিত করে (serverless-এ connection reuse জরুরি)
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        next(err);
    }
});

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running fine');
});

app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`[server]: Server is running at port ${port}`);
    });
}

export default app;