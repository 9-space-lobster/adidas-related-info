const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/:productid', (req, res) => {
	console.log('in product');

	let productid = req.params.productid;
	db.getProduct(productid, (results) => {
		res.status(200).send(results);
	});
});

module.exports = router;