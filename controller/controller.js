const Flight = require('../classes/Flight');
const {  findDuplicate, fetchData } = require('../utils/utils')
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

exports.getFlightData = async ( req, res ) => {
    const { startDate, endDate } = req.query;
    const result = await fetchData(startDate, endDate,tickets);
    res.send({"status":JSON.stringify(result)});
};