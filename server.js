const express = require('express');

const app = express();
const pssngrRoutes = require('./routes/api/passenger');
const driverRoutes = require('./routes/api/driver');
const puvRoutes = require('./routes/api/PUV');
const transpoRoutes = require('./routes/api/transpo');



app.get('/', (req,res)=> res.send('API is currently running'));

app.use(express.json({extended:false}));
app.use('/api/passenger',pssngrRoutes);
app.use('/api/driver',driverRoutes);
app.use('/api/puv',puvRoutes);
app.use('/api/transportation',transpoRoutes)
const PORT = 5000;

app.listen(PORT,()=> console.log(`Server is running under port ${PORT}`));
