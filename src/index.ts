import { app } from './app';
import dotenv from 'dotenv';

// import './config/config';  // Load configuration files

//For env File 
dotenv.config();

const port = process.env.PORT || 3000;

// Bootstrap other modules if needed

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
