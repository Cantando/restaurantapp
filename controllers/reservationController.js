const Reservation= require("../models/reservation");
const User=require("../models/user");

module.exports={

    getReservation: function(req,res){

        const {user} = req.body

        User.findOne({email:user}).then(userInfo =>{
            Reservation.findOne({firstName: userInfo.firstName}).then(reservationInfo=>{
                res.status(200).json(reservationInfo)
            })
        })
        
       
    },

    postReservation: function(req,res){
        Reservation.create({email: req.body.email},(err) =>{
            if(err) throw err;
            res.status(200);
        })
    }
}