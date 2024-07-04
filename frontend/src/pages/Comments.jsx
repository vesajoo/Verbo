import { useState, useEffect } from "react"
import axios from "axios"
import api from "../api"
import Comment from "../components/Comment"
import { useParams, useNavigate } from "react-router-dom"

const api_unregister = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

function Comments(){
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const [storyFull, setStoryFull] = useState([])
    const {selectedStory} = useParams();

    useEffect(() => {
        getComments();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = newComment
        const story = storyFull["id"]
        try {
            api
                .post("/api/subverbos/story/comment/", {story, text})
                .then((res) => {
                    if (res.status === 201)
                        getComments();
                    else alert("Failed to submit comment")
                })

        }
        catch(error) {
            alert(error.message)
        }
    }

    const getComments = () => {
        api_unregister
            .get(`/api/subverbos/story/${selectedStory}/`)
            .then((res) => res.data)
            .then((data) => {
                setComments(data[0].child_comment);
                setStoryFull(data[0]) 
            })
            .catch((err) => alert(err));
    };
    
    return <div >
        <div className="flex justify-center flex-col items-center m-4">
            <h1 className="text-white text-3xl">{storyFull["title"]}</h1>
            <div className="w-5/6 border-4 border-gray-400 m-1 p-2 rounded-lg bg-gray-700">
                <h1 className="text-white text-lg">{storyFull["text"]}</h1>
                <a className="text-white text-xs">/u/{storyFull["owner"]}</a>
                <p className="text-white">{storyFull["created_at"]}</p>
            </div>
        </div>
        
        <div className="width-5/6 p-3 justify-center flex">
            <form onSubmit={handleSubmit} className="">
                <h1 className="text-white">Uusi kommentti</h1>
                <input
                    className="h-24 w-500 bg-gray-200"
                    type="textfield"
                    onChange={(e) => setNewComment(e.target.value)}
                    value={newComment}
                    placeholder="Kommentti"
                />
                <br></br>
                <button className="text-white border-2 align-bottom m-2 p-2" type="Submit">
                    Lähetä
                </button>
            </form>
        </div>
        <div className="flex justify-center flex-col items-center m-4">
            {comments.map((comment) => (
                comment["parent_comment"] == null
                ? (<Comment comment={comment} key={comment.id}/>)
                : null
            ))}
        </div>
    </div>
}

export default Comments