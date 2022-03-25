var express = require("express");
const axios = require('axios');
var bodyParser = require("body-parser");
var cors = require('cors');
var db = require('./database.js')

var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var HTTP_PORT = 3001;
app.listen(HTTP_PORT,()=>{
    console.log("SERVER RUNNING ON PORT %PORT%".replace('%PORT%',HTTP_PORT))
});
app.get('/',(req,res,next)=>{
    res.json({'message':'ok'})
});

/*The following code will insert the data passed from the frontend using axios */

app.post("/insert/", (req,res,next)=>{
    var errors=[];
    if(!req.body.firstName){
        console.log('error');
        errors.push("Patient_record not specified")
    }
    if(errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data={
        firstName: req.body.firstName,
        surname: req.body.surname,
        contact: req.body.contact,
        prescription: req.body.prescription,
        allergies: req.body.allergies,
        treatment: req.body.treatment
    }
    var sql='INSERT INTO patient(firstName, surname, contact, prescription, allergies, treatment) VALUES (?,?,?,?,?,?)'
    var params = [data.firstName, data.surname, data.contact, data.prescription, data.allergies, data.treatment]
    db.run(sql, params,(err, result)=> {
        if(err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message":"success",
            "data":data,
            "id":this.lastID
        })
    });
});

/*The following code will take the data from data base search from the searchbar */

app.get('/patients/',(req,res,next)=>{
    console.log("Select record from patient");
    let sql="SELECT * FROM Patient";
    var params=[]
    db.all(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({'error':err.message})
            result;
        }
        res.send(rows);
    })
})
/*The following code will delete teh data from the database which firstName are Same */

app.delete("/delete/:firstName", (req,res,next) => {
    console.log("Delete patientRec:" + req.params.firstName );
    db.run('DELETE FROM patient WHERE firstName = ?',
    req.params.firstName,function(err,result){
        if(err){
            console.log('error');
            res.status(400).json({"error": res.message})
            return;
        }
        res.send(result);
    })
});
/*The following code will update the data */
app.put("/update/:firstName", (req,res,next)=>{
    console.log("Update patient:" + req.params.firstName);
    var data={
        firstName: req.body.firstName,
        surname: req.body.surname,
        contact: req.body.contact,
        prescription: req.body.prescription,
        allergies: req.body.allergies,
        treatment: req.body.treatment,
    }
    console.log("Update patient:" + data.firstName);
    var sql=' UPDATE SET patient(firstName, surname, contact, prescription, allergies, treatment) VALUES (?,?,?,?,?,?) WHERE firsName=?'
    var params = [data.firstName, data.surname, data.contact, data.prescription, data.allergies, data.treatment]
    db.run(sql, [params, firstName],(err, result)=> {
        if(err,result){
            console.log('error');
            res.status(400).json({"error":res.message})
            return;
        }
        console.log("Update Successfull")
        res.json({
            message: "success",
            data:data,
            changes:this.changes
        })
    });
});

app.use(function(req,res){
    res.status(404);
});
