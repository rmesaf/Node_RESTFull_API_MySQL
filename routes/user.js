// Dependencies
var express =  require('express');
var conn = require('../controllers/dbConnection');
var router = express.Router();


//GET API
router.get("/login", function(req , res){
    conn.query('SELECT token FROM user WHERE email = '+req.body.email+'', function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            //If there is no error, all is good and response is 200OK.
        }
    });
});

//POST API
router.post("/register", function(req , res){
    conn.query('INSERT INTO user(name, lastname, email, school, phone, birthdate, token, terms) VALUES ("' + req.body.name + '","' + req.body.lastname + '","' + req.body.email + '", "' + req.body.school + '", "' + req.body.phone + '", "' + req.body.birthdate + '", "'+req.body.token+'" , "'+req.body.terms+'")', function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            //If there is no error, all is good and response is 200OK.
        }
    });
});

module.exports = router;