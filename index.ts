import * as express from 'express';
import {Express, NextFunction, Request, Response} from 'express';

const port = process.env.NODE_PORT || 3000;
const app: Express = express();

app.use('/', express.static('./public'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});