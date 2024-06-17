import { useState, useEffect } from "react"
import axios from "axios"
import Story from "../components/Story"

const api_unregister = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

function Home(){
    const [stories, setStories] = useState([])

    useEffect(() => {
        getStories();
    }, [])

    const getStories = () => {
        api_unregister
            .get("/api/subverbos/all/")
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
        </div>
    </div>
}

export default Home