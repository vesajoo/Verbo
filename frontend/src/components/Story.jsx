import React from "react"

function Story({story}){

    const subverbo = "/v/" + story.subverbo

    return <div className="w-5/6 border-4 border-gray-400 m-6 p-6 rounded-lg bg-element-color hover:border-gray-300">
        <h1 className="text-white text-2xl">{story.title}</h1>
        <p className="text-white">Käyttäjä: {story.owner}</p>
        <a href={subverbo} className="text-purple-400 hover:text-blue-400">/v/{story.subverbo}</a>

    </div>
}

export default Story