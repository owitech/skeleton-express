import express from 'express';
const app = express();

import { loadApiEndpoints } from './controllers/api';

app.set('port', process.env.PORT ?? 3000);
app.use(express.json());

loadApiEndpoints(app);

export default app;
