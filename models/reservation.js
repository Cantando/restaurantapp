const mongoose= require('mongoose');
const Schema= mongoose.Schema;




const ReservationSchema = new Schema({
    firstname: {
        type: String
       
    },
    lastname: {
        type: String
       
    },
​
    email: {
        type: String
    
    },
    
    date: {         
        type: Date
       
    },
    time: {
        type: Date
    
    }
​
});
​
module.exports = Reservation = mongoose.model("reservation", ReservationSchema);