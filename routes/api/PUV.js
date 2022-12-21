const express = require('express');

const router = express.Router();

var db_connection = require('../../config/db');

//INSERT 
router.post('/add-puv', (req,res)=>{
    var puv_ID = req.body.puv_ID;
    var drvr_ID = req.body.drvr_ID;
    var oprtr_FN = req.body.oprtr_FN;
    var oprtr_LN = req.body.oprtr_LN;
    var franchiseNo = req.body.franchiseNo;
    var plateno = req.body.plateno;
    var regno = req.body.regno;
    var oprtr_ContNo = req.body.oprtr_ContNo;
    var route = req.body.route;

    sqlQuery = `INSERT INTO puv_tb(PUV_ID,DriverID,Operator_FN,Operator_LN,
    FranchiseNo,PUV_PlateNo,PUV_RegNo,Operator_ContactNo,PUV_Route) VALUES(${puv_ID},"${drvr_ID}","${oprtr_FN}","${oprtr_LN}","${franchiseNo}",
    "${plateno}","${regno}",${oprtr_ContNo},"${route}")`;
        
        db_connection.query(sqlQuery,function(error,results,fields){
            if(error) throw error;
            res.status(200).json(results);
        });
    
    });


 //VIEW
 router.get('/view-puv',(req, res)=>{
    sqlQuery = `SELECT * FROM puv_tb`;
    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});

// DELETE
router.delete('/delete-puv/:id', (req, res) => {
    var readingId = req.params.id;
    sqlQuery = `DELETE FROM puv_tb WHERE PUV_ID=${readingId}`;
    db_connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json({
        msg: 'Data Successfully Deleted',
        results: results,
      });
    });
  });

//UPDATE
router.put('/update-puv/:id',(req,res)=>{
    var puv_ID = req.body.puv_ID;
    var drvr_ID = req.body.drvr_ID;
    var oprtr_FN = req.body.oprtr_FN;
    var oprtr_LN = req.body.oprtr_LN;
    var franchiseNo = req.body.franchiseNo;
    var plateno = req.body.plateno;
    var regno = req.body.regno;
    var oprtr_ContNo = req.body.oprtr_ContNo;
    var route = req.body.route;
    var id = req.params.id;
    sqlQuery = `UPDATE puv_tb SET DriverID=${drvr_ID},Operator_FN="${oprtr_FN}", Operator_LN="${oprtr_LN}",FranchiseNo=${franchiseNo},
    PUV_PlateNo="${plateno}",PUV_RegNo=${regno},Operator_ContactNo=${oprtr_ContNo},PUV_Route="${route}" 
    WHERE PUV_ID = ${id}`;

    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});




    module.exports = router;