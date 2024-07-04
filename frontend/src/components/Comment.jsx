import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Comment({comment}){

    const [showReply, setShowReply] = useState(false);
    const [newComment, setNewComment] = useState("")
    const [replies, setReplies] = useState([])


    const d = new Date(comment.created_at);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = newComment
        const story = comment["story"]
        const parent_comment = comment["id"]
        try {
            api
                .post("/api/subverbos/story/comment/", {story, text, parent_comment})
                .then((res) => {
                    if (res.status === 201)
                        alert("Success")
                    else alert("Failed to submit comment")
                })

        }
        catch(error) {
            alert(error.message)
        }
    }
    

    return <div className="w-5/6 border-4 border-gray-400 m-1 p-1 rounded-lg bg-gray-700 hover:border-gray-300 hover:bg-gray-600 text-white">
        <h1 className="text-white text-lg">{comment.text}</h1>
        <div className="flex justify-start text-xs">
            <a className="mr-3">/u/{comment.owner}</a>
            <p className="mr-3">{d.toString()}</p>
        </div>
        <p className="cursor-pointer text-sm hover:text-purple-400" onClick={() => setShowReply(!showReply)}>Vastaa</p>
        {showReply && (
            <div className="p-3 justify-around">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-white">Vastaa</h1>
                    <input
                        className="h-24 w-500 bg-gray-200 text-black m-1"
                        type="textfield"
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                        placeholder="Kommentti"
                    />
                    <div className="align-bottom">
                        <button className="text-white border-2 m-1 p-1" type="Submit">
                            Lähetä
                        </button>
                        <button className="text-white border-2 m-1 p-1" onClick={() => setShowReply(!showReply)}>
                            Peruuta
                        </button>
                    </div>
                </form>
            </div>
        )}
        {comment["replies"].map((reply) => <Comment comment={reply} key={reply.id}/>)}
    </div>
}

export default Comment