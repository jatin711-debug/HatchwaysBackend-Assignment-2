exports.findDuplicate = async (newData, oldData) =>{
    var errorMssg = "";
    if(oldData === []) return;
    
    for( let data of oldData ){
        if(data.ticketId === newData.ticketId){
            errorMssg += "Ticket Id Already Exist";
            return errorMssg;
        } 
        if(data.flightNumber === newData.flightNumber && data.seatNumber === newData.seatNumber){
            errorMssg += "This Seat is Already Taken/Booked";
            return errorMssg;
        } 
    }
    return errorMssg;
}

exports.fetchData = function(start,end,listData){
    var startDate = new Date(start);
    var endDate = new Date(end);
    var resultData = listData.filter(a => {
        var date = new Date(a.flightDate);
        return (date >= startDate && date <= endDate);
    });

    return resultData;
}