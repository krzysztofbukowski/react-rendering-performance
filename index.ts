import * as express from 'express';
import {Express, NextFunction, Request, Response} from 'express';
import * as ejs from 'ejs';

const port = process.env.NODE_PORT || 3000;
const app: Express = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.disable('view cache');

app.get('/', (req: Request, res: Response) => {
    res.render('index');
})

app.get('/inline-scripts.html', (req: Request, res: Response) => {
    const count = parseInt(req.query.count) || 100;
    const data = Array(count).fill(0);
    res.render('inline-scripts', {data});
});

app.get('/request-animation-frame.html', (req: Request, res: Response) => {
    const count = parseInt(req.query.count) || 100;
    const data = Array(count).fill(0);
    res.render('request-animation-frame', {data});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});