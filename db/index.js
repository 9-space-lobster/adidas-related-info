var mysql = require('mysql');
var mysql_config = require('./mysql_config.js');

var connection = mysql.createConnection(mysql_config);

var getProduct = function(){

};

module.exports.getProduct = getProduct;
