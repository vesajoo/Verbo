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
                    alert("Yhteisö luotu"),
                    navigate(`/v/${name}`);
                else alert("Yhteisön luonti epäonnistui");
            })
            .catch((err) => alert(err));
    };

    return <div className="w-5/6 flex justify-center m-5 p-5">
    <form onSubmit={createSub}>
        <br/>
            <div className="border-2 p-5">
                <label htmlFor="title" className="text-white m-2">Yhteisön nimi</label>
                <input
                    type="text"
                    id="title"
                    className=""
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br></br>
                <br></br>
                <input type="submit" value="Lähetä" className="text-white border-2 rounded-md p-2 bg-gray-500 cursor-pointer hover:bg-purple-400"></input>
            </div>
    </form>
</div>
}

export default CreateSub