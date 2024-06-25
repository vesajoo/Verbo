import React from "react"
import { useNavigate } from "react-router-dom";

function Comment({comment}){

    return <div className="w-5/6 border-4 border-gray-400 m-2 p-3 rounded-lg bg-gray-700 hover:border-gray-300 hover:bg-gray-600">
        <h1 className="text-white text-lg">{comment.text}</h1>
        <a className="text-white text-xs">/u/{comment.owner}</a>

    </div>
}

export default Comment