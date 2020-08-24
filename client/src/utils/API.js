import axios from "axios";

export default {
    // API request to server side 

    //User Registration////////////////////////
    
    register(data) {   
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },

    //User Reservation///////////////////////////

    //getting reservation
    getReservations () {
        return axios.get("/auth/get")
    },

    //post method////
    postReservations (){
        return axios.post("/auth/post")
    }


}