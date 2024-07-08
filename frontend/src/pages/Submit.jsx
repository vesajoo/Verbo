import { useState, useEffect } from "react"
import api from "../api"

function Submit(){
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [subs, setSubs] = useState([])
    const [selectedSub, setSelectedSub] = useState()


    const getSubs = () => {
        api
            .get("/api/subverbos/")
            .then((res) => res.data)
            .then((data) => {
                setSubs(data);
            })
            .catch((err) => alert(err));
        };

    useEffect(() => {
        getSubs();
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const subverbo = selectedSub
        try {
            api
                .post("/api/subverbos/story/create/", {subverbo, title, text})
                .then((res) => {
                    if (res.status === 201) 
                        alert("Success");
                        // navigate(`/v/${subverbo}`);
                    else alert("Failed to submit");
                })
        }
        catch(error) {
            alert(error.message)
        }
        
    };

    return <div className="w-1/2">
    <div className="m-5">
        <form onSubmit={handleSubmit} className="border-2 p-5 flex flex-col">
            <label htmlFor="title" className="text-white ">Otsikko</label>
            <br/>
            <input
                type="text"
                id="title"
                className="w-full"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <br/>
            <label htmlFor="text" className="text-white ">Teksti</label>
            <br/>
            <textarea
                type="text"
                id="text"
                className="w-full"
                required
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <br/>
            <label htmlFor="select" className="text-white ">Yhteisö: </label>
            <br></br>
            <select id="sub" value={selectedSub} onChange={(e) => setSelectedSub(e.target.value)}>
                {subs.map((sub, i) => <option value={sub.id} key={sub.id}>{sub.name}</option>)}
            </select>
            <br></br>
            <br></br>
            <input type="submit" value="Lähetä" className="text-white border-2 rounded-md p-2 bg-gray-500 cursor-pointer hover:bg-purple-400"></input>
        </form>
    </div>
    </div>
}

export default Submit