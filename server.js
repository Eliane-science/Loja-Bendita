const express = require('express');
const { Pool } = require('undici-types');
const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bendita_kids',
    password: 'eli@2432337',
    port: 5432,
})

app.get('/produtos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produtos');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar produtos' });
    }
    
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});