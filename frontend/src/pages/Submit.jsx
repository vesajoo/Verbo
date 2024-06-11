import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../api"

function Submit(){
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)
    const [subs, setSubs] = useState([])
    const [sub, setSub] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        getSubs();
    }, [])

    const getSubs = () => {
        api
            .get("/api/subverbos/")
            .then((res) => res.data)
            .then((data) => {
                setSubs(data);
            })
            .catch((err) => alert(err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title,text,sub)
        setLoading(true)
        try {
            await api
                .post("/api/subverbos/story/create/", {sub, title, text})
                .then((res) => {
                    if (res.status === 201) 
                        alert("Success"),
                        navigate(`/v/${subverbo}`);
                    else alert("Failed to submit");
                })
        }
        catch(error) {
            alert(error.message)
        }
        finally {
            setLoading(false)
        }
    };

    return <div>
        <h2>Submit</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <br/>
            <input
                type="text"
                id="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <br/>
            <label htmlFor="text">Text</label>
            <br/>
            <input
                type="text"
                id="text"
                required
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <br/>
            <label htmlFor="select">Sub: </label>
            <br></br>
            <select id="sub">
                {subs.map((sub) => <option value={sub.id} onChange={(value) => setSub(value)}>{sub.name}</option>)}
            </select>
            <br></br>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
}

export default Submit