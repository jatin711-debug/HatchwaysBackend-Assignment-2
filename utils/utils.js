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

exports.fetchdata = function(start,end,listData){
    let init = start;
    const data = [];
    let template = {date:"",flights:[
        flightNumber=0,
        revenue=0,
        occupiedSeats=[]
    ]};
    do{
        
    }while(init != end);
}