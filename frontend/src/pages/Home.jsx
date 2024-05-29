import { useState, useEffect } from "react"
import api from "../api"

function Home(){
    const [subs, setSubs] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        getSubs();
    }, [])

    const getSubs = () => {
        api
            .get("/api/subverbos/")
            .then((res) => res.data)
            .then((data) => {setSubs(data); console.log(data)})
            .catch((err) => alert(err));
    };

    const createSub = (e) => {
        e.preventDefault()
        api
            .post("/api/subverbos/create/", {name})
            .then((res) => {
                if (res.status === 201) alert("Sub created");
                else alert("Failed to create sub");
            })
            .catch((err) => alert(err));
        getSubs();
    }

    return <div>
        <div>
            <h2>Subs</h2>

        </div>
        <h2>Create a Sub</h2>
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

export default Home