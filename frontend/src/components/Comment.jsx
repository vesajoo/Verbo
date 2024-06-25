import React from "react"
import { useNavigate } from "react-router-dom";

function Comment({comment}){

    return <div className="w-5/6 border-4 border-gray-400 m-3 p-6 rounded-lg bg-gray-700 hover:border-gray-300 hover:bg-gray-600">
        <h1 className="text-white text-2xl">{comment.text}</h1>
        <p className="text-white">/u/{comment.owner}</p>

    </div>
}

export default Comment