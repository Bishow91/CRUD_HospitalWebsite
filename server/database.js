var sqlite3 = require('sqlite3').verbose();
/*The following code will generate the database path for data */
let db = new sqlite3.Database('./Hospital.db',(err)=>{
    if(err){
        console.error(err.message)
    }else{
        console.log("Connected to Database");
    }
});

const sql = 'CREATE TABLE patient(firstName text PRIMARY KEY NOT NULL,surname text NOT NULL,contact text NOT NULL,prescription text NOT NULL,allergies text NOT NULL,treatment text NOT NULL';
db.run(sql,(err)=>{
    if(err){
        console.log("Table already created");
    }else{
        console.log("Table created");
        var insert = "INSERT INTO patient(firstName,surname,contact,prescription,allergies,treatment) VALUES (?,?,?,?,?,?)";
        db.run(insert,['Bishow','Gurung','07474518124','Nothing','Nothing','Nothing']);
        db.run(insert,['John','Sorle','045122523','Vitamin D','Skin','Therapy']);
        db.run(insert,['Silc','Uiht','784522665','Fat','Skin','Lotion']);
    }
});
module.exports=db