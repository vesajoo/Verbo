import { useState } from "react";
import api from "../api"
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";


function Form({route, method}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const name = method === "login" ? "Kirjaudu" : "Rekisteröidy"

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(route, {username, password})
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/")
            } else {
                navigate("/login")
            }
        }
        catch (error) {
            alert(error)
        }
    }

    return <div className="w-5/6 flex justify-center m-6">
        <form onSubmit={handleSubmit} className="text-white">
            <h1 className="text-2xl">{name}</h1>
            <div className="border-2 rounded p-5 m-4">
                <label htmlFor="userField">Käyttäjänimi</label>
                <br></br>
                <input
                    id="userField"
                    className="m-2 p-1 text-black"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Käyttäjänimi"
                />
                <br></br>
                <label htmlFor="passField">Salasana</label>
                <br></br>
                <input
                    id="passField"
                    className="p-1 m-2 text-black"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Salasana"
                />
                <br></br>
                <button className="border-2 m-1 p-1 rounded hover:bg-purple-400" type="Submit">
                    {name}
                </button>
            </div>
        </form>
    </div>
}

export default Form