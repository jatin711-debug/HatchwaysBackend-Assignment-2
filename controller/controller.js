const Flight = require('../classes/Flight');
const {  findDuplicate } = require('../utils/utils')
const tickets = [];

exports.createNewTicket = async (req, res) =>{
    const  { ticketId, flightDate, flightNumber, seatNumber, ticketCost } = req.body.event;
    let data = new Flight(ticketId,flightDate,flightNumber,seatNumber,ticketCost);
    const result =  await findDuplicate(data,tickets);
    console.log(result);
    if(result.length === 0 ) {
        tickets.push(data);
        res.send({"status":"success"})
    }else{
        res.send({"status":"failed","reason":`${result}`});
    }
}

exports.getFlightData = ( req, res ) => {
    const { startDate, endDate } = req.query;
    const result = fetchData(startDate, endDate,tickets);
};