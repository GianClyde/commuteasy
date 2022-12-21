const express = require('express');

const router = express.Router();

var db_connection = require('../../config/db');

//INSERT 
router.post('/add-pssngr', (req,res)=>{
    var pass_ID = req.body.pass_ID;
    var pass_LN = req.body.pass_LN;
    var pass_FN = req.body.pass_FN;
    var pass_email = req.body.pass_email;
    var pass_psswrd = req.body.pass_psswrd;
    var pass_UN = req.body.pass_UN;
    var pass_cntc = req.body.pass_cntc;
    var pass_loc = req.body.pass_loc;

    sqlQuery = `INSERT INTO passenger_tb(PassengerID,Passenger_LN,Passenger_FN,Passenger_email,
    Passenger_UserName,Passenger_CntctNo,Passenger_PW,Passenger_Loc) VALUES(${pass_ID},"${pass_LN}","${pass_FN}","${pass_email}","${pass_UN}","${pass_cntc}","${pass_psswrd}","${pass_loc}")`;
    
    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });

});

//VIEW
router.get('/view-pssngr',(req, res)=>{
    sqlQuery = `SELECT * FROM passenger_tb`;
    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});


//DELETE
router.delete('/delete-pssngr/:id', (req, res) => {
    var readingId = req.params.id;
    sqlQuery = `DELETE FROM passenger_tb WHERE PassengerID=${readingId}`;
    db_connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json({
        msg: 'Data Successfully Deleted',
        results: results,
      });
    });
  });

//UPDATE
router.put('/update-pssngr/:id',(req,res)=>{
    var pass_ID = req.body.pass_ID;
    var pass_LN = req.body.pass_LN;
    var pass_FN = req.body.pass_FN;
    var pass_email = req.body.pass_email;
    var pass_cntc = req.body.pass_cntc;
    var pass_psswrd = req.body.pass_psswrd;
    var pass_UN = req.body.pass_UN;
    var pass_loc = req.body.pass_loc;
    var id = req.params.id;
    sqlQuery = `UPDATE passenger_tb SET Passenger_LN="${pass_LN}", Passenger_FN="${pass_FN}",Passenger_email="${pass_email}",
    Passenger_UserName="${pass_UN}",Passenger_CntctNo="${pass_cntc}",Passenger_PW="${pass_psswrd}",Passenger_PW="${pass_loc}" WHERE PassengerID = "${id}"`;

    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});




module.exports = router;