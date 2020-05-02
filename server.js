const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.status(200).send('OK get request');
})

app.listen(3000);
