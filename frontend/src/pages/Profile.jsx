import React from "react";
import axios from "axios"
import { useParams, Routes, Route, Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import Story from "../components/Story"
import ProfileComments from "../components/ProfileComments"


const api_unregister = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

function Profile() {
    const [stories, setStories] = useState([])
    const [comments, setComments] = useState([])
    const [storiesOrComments, setStoriesOrComments] = useState(true)

    const {user} = useParams();

    useEffect(() => {
        getProfile();
    }, [])

    const getProfile = () => {
        api_unregister
            .get(`/api/user/${user}/`)
            .then((res) => res.data)
            .then((data) => {
                if (data.length) {
                    console.log(data)
                    setComments(data[0].comments);
                    setStories(data[0].stories); 
                } else {
                    alert("Käyttäjää ei löydy")
                }
            })
            .catch((err) => alert(err));
    };

    return <div className="flex justify-center mt-5">
        <div className="w-5/6">
            <p className="text-white mb-5">/u/{user}</p>
            <div className="flex justify-start border-2 w-fit rounded text-white">
                <p className={`border-r-2 p-2 hover:bg-purple-600 cursor-pointer ${storiesOrComments === true ? 'bg-purple-500' : 'bg-gray-600'}`} onClick={() => {setStoriesOrComments(true)}}>Lisätyt</p>
                <p className={`border-r-2 p-2 hover:bg-purple-600 cursor-pointer ${storiesOrComments === false ? 'bg-purple-500' : 'bg-gray-600'}`} onClick={() => {setStoriesOrComments(false)}}>Kommentit</p>
            </div>
            {storiesOrComments 
                ?
                    <div>
                        {stories.map((story) => <Story story={story} key={story.id}/>)}
                    </div>
                :
                    <div>
                        {comments.map((comment) => <ProfileComments comment={comment} key={comment.id}/>)}
                    </div>
                }
            
        </div>
        
    </div>

}

export default Profile