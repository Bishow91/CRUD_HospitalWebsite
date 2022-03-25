var sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("Hospital.db");
let sql="SELECT * FROM patient"
db.all(sql, [], (err,rows)=>{
    if(err){
        throw err;
    }
    rows.forEach((row)=>{
        console.log('FirstName = ' + row.firstName + 'Surname = ' + row.surname + 'Contact = ' + contact + 'Prescription = ' + prescription  );
        console.log('Allergies = ' + row.allergies + 'Treatment = ' + row.treatment);
    });
});
db.close;