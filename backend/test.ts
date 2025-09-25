import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Falzar API!' });
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Falzar API!' });
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Falzar API!' });
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Falzar API!' });
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});