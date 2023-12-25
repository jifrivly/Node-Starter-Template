import express, { Request, Response , Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';

const app: Application = express();

// Apply middleware
// Apply CORS middleware before other middleware that might write headers
app.use(cors());  // Enable CORS for all origins
// app.use(cors({
//     origin: 'https://example.com',  // Allow requests only from a specific origin
//     methods: 'GET,POST,PUT,DELETE',  // Allow specific HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific request headers
// }));
app.use(helmet());  // Security headers
app.use(compression());  // Compression
app.use(bodyParser.json());  // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));  // Parse URL-encoded request bodies

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

export { app };