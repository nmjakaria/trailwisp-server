import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import routes from './routes/index.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running fine');
});

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

async function startServer() {
    await connectDB();
    app.listen(port, () => {
        console.log(`[server]: Server is running at port ${port}`);
    });
}

startServer();