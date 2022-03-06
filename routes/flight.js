const router = require('express').Router();
const { createNewTicket, getFlightData } = require('../controller/controller');


router.post('/tickets',createNewTicket);

router.get('/flights',getFlightData);


module.exports = router;