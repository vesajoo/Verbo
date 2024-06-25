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
    const [storyFull, setStoryFull] = useState()
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
                console.log(data)
            })
            .catch((err) => alert(err));
    };
    
    return <div>
        <div>

        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="text-white">Uusi kommentti</h1>
                <input
                    className=""
                    type="textfield"
                    onChange={(e) => setNewComment(e.target.value)}
                    value={newComment}
                    placeholder="Kommentti"
                />
                <button className="text-white border-2" type="Submit">
                    Lähetä
                </button>
    </form>
        </div>
        <div className="flex justify-center flex-col items-center m-4">
            {comments.map((comment) => <Comment comment={comment}/>)}
        </div>
    </div>
}

export default Comments