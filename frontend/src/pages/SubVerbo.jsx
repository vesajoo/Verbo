import { useState, useEffect } from "react"
import axios from "axios"
import Story from "../components/Story"
import { useParams } from "react-router-dom"

const api_unregister = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

function SubVerbo(){
    const [stories, setStories] = useState([])
    const {sub} = useParams();
    console.log(sub)

    useEffect(() => {
        getStories();
    }, [])

    const getStories = () => {
        api_unregister
            .get(`/api/subverbos/${sub}/`)
            .then((res) => res.data)
            .then((data) => {
                setStories(data); 
                console.log(data)
            })
            .catch((err) => alert(err));
    };

    return <div>
        <div className="flex justify-center flex-col items-center m-6">
            {stories.map((story) => <Story story={story}/>)}
            <a href={`/submit`}>Luo uusi</a>
        </div>
    </div>
}

export default SubVerbo