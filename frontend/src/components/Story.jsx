import React from "react"
import { useNavigate } from "react-router-dom";

function Story({story}){

    const navigate = useNavigate()
    const subverbo = "/v/" + story.subverbo

    const handleClick = () => {
        navigate("/"+story.story_url)
    }
    console.log(story)

    return <div className="w-5/6 border-4 border-gray-400 m-1 p-4 rounded-lg bg-gray-700 hover:border-gray-300 hover:bg-gray-600" onClick={handleClick}>
        <h1 className="text-white text-2xl">{story.title}</h1>
        <p className="text-white">/u/{story.owner}</p>
        <a href={subverbo} className="text-purple-400 hover:text-blue-400">/v/{story.subverbo}</a>

    </div>
}

export default Story