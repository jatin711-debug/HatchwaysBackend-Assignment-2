const express = require ("express");
const app = express();
const moment = require ("moment");
const flightRoutes = require ("./routes/flight");
const bodyParser = require('body-parser');


app.use(bodyParser.json({type: 'application/json'}))
app.use('/api',flightRoutes);

app.listen(3000, function () {
	console.log(moment().format('YYYY-MM-DD'));
})
