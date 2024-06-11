import React from "react"

function Story({story}){

    return <div className="story-container">
        <h3 className="story-title">{story.title}</h3>

    </div>
}

export default Story