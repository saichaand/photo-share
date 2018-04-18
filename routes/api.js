// api routes

var express = require('express');
var router = express.Router();

var controllers = require('../controllers/index');

// every api revolves around a resource
router.get('/:resource', function(req, res, next) {
	console.log(req);
	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller === undefined){
		res.json({
			confirmation : 'fail',
			message : 'Invalid resource ERROR'
	 	})
	}

	controller.get(req.query, false)
	.then(function(results){ //sucess
		res.json({
			confirmation : 'success',
			results : results
	 	})
	})
	.catch(function(err){	//if error
		res.json({
			confirmation : 'fail',
			message : 'Find ERROR: ' + err
	 	})
	})

});


router.get('/:resource/:id', function(req, res, next){
	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller === undefined){
		res.json({
			confirmation : 'fail',
			message : 'Invalid resource ERROR'
	 	})
	}

	controller.getById(req.params.id, false)
	.then(function(result){ //sucess
		res.json({
			confirmation : 'success',
			result : result
	 	})
	})
	.catch(function(err){	//if error
		res.json({
			confirmation : 'fail',
			message : 'FindById ERROR: ' + err
	 	})
	})
});

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource;
	var controller = controllers[resource];
	console.log(req.body);
	if(controller === undefined){
		res.json({
			confirmation : 'fail',
			message : 'Invalid resource ERROR'
	 	})
	}

	// post request deliver data through body
	controller.post(req.body, false)
	.then(function(result){
		res.json({
			confirmation : 'success',
			result : result
	 	})
	})
	.catch(function(err){
		res.json({
			confirmation : 'fail',
			message : 'Post ERROR: ' + err
	 	})
	})
})

module.exports = router;





