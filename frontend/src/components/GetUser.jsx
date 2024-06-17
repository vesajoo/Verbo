import React from "react";
import api from "../api";

function GetUser(){
    api
        .get("/api/user/loggeduser/")
        .then((res) => res.data)
        .then((data) => {
            return data.username
        })  
}

export default GetUser