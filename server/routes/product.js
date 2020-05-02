const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/:productid', (req, res) => {
	console.log('in product');

	let productid = req.params.productid;

	res.status(200).send(productid);
});

module.exports = router;
