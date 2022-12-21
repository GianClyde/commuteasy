const express = require('express');

const router = express.Router();

var db_connection = require('../../config/db');

//INSERT 
router.post('/add-trans', (req,res)=>{
    var trans_ID = req.body.trans_ID;
    var puv_ID = req.body.puv_ID;
    var passngr_ID = req.body.passngr_ID;
    var destination = req.body.destination;
    var pickup = req.body.pickup;
    var rates = req.body.rates;

    sqlQuery = `INSERT INTO transpo_tb(Transpo_ID,PUV_ID,PassengerID,Destination,
    Rates,PickUpLoc) VALUES(${trans_ID},${puv_ID},${passngr_ID},"${destination}","${rates}",
    "${pickup}")`;
        
        db_connection.query(sqlQuery,function(error,results,fields){
            if(error) throw error;
            res.status(200).json(results);
        });
    
    });

//VIEW
router.get('/view-trans',(req, res)=>{
    sqlQuery = `SELECT * FROM transpo_tb`;
    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});

// DELETE
router.delete('/delete-trans/:id', (req, res) => {
    var readingId = req.params.id;
    sqlQuery = `DELETE FROM transpo_tb WHERE Transpo_ID=${readingId}`;
    db_connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json({
        msg: 'Data Successfully Deleted',
        results: results,
      });
    });
  });


//UPDATE
router.put('/update-trans/:id',(req,res)=>{
    var trans_ID = req.body.trans_ID;
    var puv_ID = req.body.puv_ID;
    var passngr_ID = req.body.passngr_ID;
    var destination = req.body.destination;
    var pickup = req.body.pickup;
    var rates = req.body.rates;
    var id = req.params.id;
    sqlQuery = `UPDATE transpo_tb SET PUV_ID=${puv_ID},PassengerID=${passngr_ID}, Destination="${destination}",Rates="${rates}",
    PickUpLoc="${pickup}" WHERE Transpo_ID = ${id}`;

    db_connection.query(sqlQuery,function(error,results,fields){
        if(error) throw error;
        res.status(200).json(results);
    });
});





module.exports=router