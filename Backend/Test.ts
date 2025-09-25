import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Falzar API!');
});

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});