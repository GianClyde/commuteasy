const express = require('express');

const router = express.Router();

var db_connection = require('../../config/db');

//INSERT 
router.post('/add-drvr', (req,res)=>{
    var drvr_ID = req.body.drvr_ID;
    var drvr_LN = req.body.drvr_LN;
    var drvr_FN = req.body.drvr_FN;
    var drvr_email = req.body.drvr_email;
    var drvr_psswrd = req.body.drvr_psswrd;
    var drvr_UN = req.body.drvr_UN;
    var drvr_loc = req.body.drvr_loc;
    var drvr_lscns = req.body.drvr_lscns;
    var drvr_ContNo = req.body.drvr_ContNo;
    var drvr_photo = req.body.drvr_photo;

    sqlQuery = `INSERT INTO driver_tb(DriverID,Driver_LN,Driver_FN,Driver_email,
    Driver_UserName,Driver_PW,Driver_location,Driver_License,Driver_ContactNo) VALUES(${drvr_ID},"${drvr_LN}","${drvr_FN}","${drvr_email}","${drvr_UN}","${drvr_psswrd}",
    "${drvr_loc}","${drvr_lscns}",${drvr_ContNo})`;
        
        db_connection.query(sqlQuery,function(error,results,fields){
            if(error) throw error;
            res.status(200).json(results);
        });
    
    });


 //VIEW
router.get('/view-drvr',(req, res)=>{
    sqlQuery = `SELECT * FROM driver_tb`;
    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});



// DELETE
router.delete('/delete-drvr/:id', (req, res) => {
    var readingId = req.params.id;
    sqlQuery = `DELETE FROM driver_tb WHERE DriverID=${readingId}`;
    db_connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json({
        msg: 'Data Successfully Deleted',
        results: results,
      });
    });
  });


//UPDATE
router.put('/update-drvr/:id',(req,res)=>{
    var drvr_ID = req.body.drvr_ID;
    var drvr_LN = req.body.drvr_LN;
    var drvr_FN = req.body.drvr_FN;
    var drvr_email = req.body.drvr_email;
    var drvr_psswrd = req.body.drvr_psswrd;
    var drvr_UN = req.body.drvr_UN;
    var drvr_loc = req.body.drvr_loc;
    var drvr_lscns = req.body.drvr_lscns;
    var drvr_ContNo = req.body.drvr_ContNo;
    var id = req.params.id;
    sqlQuery = `UPDATE driver_tb SET Driver_LN="${drvr_LN}", Driver_FN="${drvr_FN}",Driver_email="${drvr_email}",
    Driver_UserName="${drvr_UN}",Driver_PW="${drvr_psswrd}",Driver_location="${drvr_loc}",Driver_License="${drvr_lscns}",Driver_ContactNo=${drvr_ContNo} 
    WHERE DriverID = ${id}`;

    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});










    module.exports = router;