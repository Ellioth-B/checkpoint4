const express = require('express');
const app = express();
const port = 3006;
const connection = require('./conf');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with')
    
    next()
})

app.get('/artistes', (req, res) => { // utser de filtre pour pas faire tout passer en donnée
    
    connection.query('SELECT * from artistes', (err, results) => {
        
        if (err) 
        {
            res.status(500).send('Erreur lors de la récupération des artistes');
        } 
        else 
        {
            res.json(results);
        }
    });
});

app.post('/artistes', (req, res) => {
    
    const formData = req.body;
    
    connection.query('INSERT INTO artistes SET ?', formData, (err, results) => {
        
        if (err) 
        {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde d'une artistes");
        } 
        else 
        {
            res.sendStatus(200);
        }
    });
});

app.put('/artistes/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    
    connection.query('UPDATE artistes SET ? WHERE id = ?', [formData, id], err => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la modification d'une artistes");
        }
        else {
            res.sendStatus(200);
        }
    });
});

app.delete('/artistes/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM artistes WHERE id = ?', [id], err => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la suppression d'une artistes");
        }
        else {
            res.sendStatus(200);
        }
    });
});

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    
    console.log(`Server is listening on ${port}`);
});