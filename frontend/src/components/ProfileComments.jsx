import React from "react"
import DateParser from "./DateParser"

function ProfileComments({comment}){


    const user = "/u/" + comment["owner"]
    const sub = "/v/" + comment.story__subverbo
    const story = "/" + comment.story__story_url

    const d = new Date(comment.created_at);

    

    return <div>
        <a className="text-2xl m-1 text-white hover:text-gray-400 hover:cursor-pointer" href={story}>{comment.story__title}</a>
        <a href={sub} className="text-white hover:text-purple-400">{sub}</a>
        <div className="w-5/6 border-4 border-gray-400 m-1 p-1 rounded-lg bg-gray-700 hover:border-gray-300 hover:bg-gray-600 text-white">
                <h1 className="text-white text-lg">{comment.text}</h1>
            <div className="flex justify-start text-xs">
                <a className="mr-3 hover:text-gray-400 hover:cursor-pointer" href={user}>/u/{comment.owner}</a>
                <DateParser d={d} />
            </div>
        </div>
    </div>
}

export default ProfileComments