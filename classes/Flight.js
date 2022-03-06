class Flight{
    constructor(uid,date,number,seat,cost) {
        this.ticketId = uid;
        this.flightDate = date;
        this.flightNumber = number;
        this.seatNumber = seat;
        this.ticketCost = cost;
    }
}

module.exports = Flight;