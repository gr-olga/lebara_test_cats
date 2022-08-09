import {useState} from "react";
import axios from "axios";
import "./CatsShower.css"

export default function CatsShower() {
    const [cat, setCat] = useState({})
    const [mark, setMark] = useState(false)

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
        setMark(true)
    }


    return (
        <div>
            <button
                className="space_btn"
                href="/"
                target="_blank"
                onClick={() => loadCat()}
            > Show the new cat
            </button>
            {
                mark ?
                    <div>
                        {cat.breed ?
                            <div>
                                <h4>{cat.breed.name}</h4>
                                <p>{cat.breed.temperament}</p>
                            </div>
                            : <p className="title">We don't know the breed of this cat</p>}
                        <img className="image" src={cat.url} alt="cat image"/>
                    </div>
                    : <p> Click on the button to see the cats </p>
            }
        </div>
    )
}