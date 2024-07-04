import React from "react"
import { useNavigate } from "react-router-dom";

function Comment({comment}){

    const d = new Date(comment.created_at);

    const handleClick = () => {

    }
    

    return <div className="w-5/6 border-4 border-gray-400 m-1 p-2 rounded-lg bg-gray-700 hover:border-gray-300 hover:bg-gray-600 text-white">
        <h1 className="text-white text-lg">{comment.text}</h1>
        <div className="flex justify-start text-xs">
            <a className="mr-3">/u/{comment.owner}</a>
            <p className="mr-3">{d.toString()}</p>
        </div>
        <p className="cursor-pointer text-sm hover:text-purple-400" onClick={handleClick}>Vastaa</p>

    </div>
}

export default Comment