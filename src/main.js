import express from 'express';
import routes from './routes.js';

const app = express();
app.use('/api/v1', routes);
const api_url = 'http://localhost:3000/api/v1';

app.listen(3000, () => console.log(
    'Server is running at ' + api_url));   


console.log("Program started...");
