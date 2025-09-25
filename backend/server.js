import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
app.use(express.json());

app.get('/health', (req,res)=>res.json({ok:true}));
app.get('/api/time', async (req,res)=>{
  try {
    const conn = await mysql.createConnection({host:'db', user:process.env.MYSQL_USER, password:process.env.MYSQL_PASSWORD, database:process.env.MYSQL_DATABASE});
    const [rows] = await conn.query('SELECT NOW() as now');
    await conn.end();
    res.json(rows[0]);
  } catch(e){ res.status(500).json({err:e.message}); }
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log('API on',port));
