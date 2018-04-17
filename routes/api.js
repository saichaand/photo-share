// api routes

var express = require('express');
var router = express.Router();

// every api revolves around a resource
router.get('/:resource', function(req, res, next) {

	var resource = req.params.resource;
	res.json({
		confirmation : 'success',
		message : 'req.params.resource: ' + resource
 	})
});

module.exports = router;
