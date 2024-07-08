import React from "react"
import { useNavigate } from "react-router-dom";
import DateParser from "./DateParser";

function Story({story}){

    const subverbo = "/v/" + story.subverbo
    const user = "/u/" + story.owner



    return <div className="w-5/6 border-4 border-gray-400 m-1 p-4 rounded-lg bg-gray-700 hover:border-gray-300 hover:bg-gray-600 flex flex-col">
        <a className="text-white text-2xl" href={"/"+story.story_url}>{story.title}</a>
        <a className="text-white hover:text-gray-400 hover:cursor-pointer" href={user}>/u/{story.owner}</a>
        <a href={subverbo} className="text-purple-400 hover:text-blue-400">/v/{story.subverbo}</a>
        <DateParser d={story.created_at}></DateParser>

    </div>
}

export default Story