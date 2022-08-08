import {useState} from "react";
import axios from "axios";

export default function CatsShower() {
    const [cat, setCat] = useState({})

    async function getRandomCat() {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search");
        return res.data[0];
    }

    async function getCatData(id) {
        return await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
    }

    async function getCat() {
        const {id} = await getRandomCat();
        return getCatData(id)
    }

    async function loadCat() {
        const {data} = await getCat();
        setCat(data);
    }

    return (
        <div>
            <button onClick={() => loadCat()}>Tab</button>
            <h4>{cat.id}</h4>
            <img src={cat.url} alt="cat image"/>
        </div>
    )
}