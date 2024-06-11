import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"

function CreateSub(){
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const createSub = async (e) => {
        e.preventDefault();
        await api
            .post("/api/subverbos/create/", {name})
            .then((res) => {
                if (res.status === 201) 
                    alert("Sub created"),
                    navigate(`/v/${name}`);
                else alert("Failed to create sub");
            })
            .catch((err) => alert(err));
    };

    return <div>
        <h2>Create a SubVerbo</h2>
        <form onSubmit={createSub}>
            <label htmlFor="name">Sub name:</label>
            <br/>
            <input
                type="text"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <br/>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
}

export default CreateSub