import {useEffect, useState} from "react";
import axios from "axios";

export default function CatsShower() {
    const [cat, setCat] = useState()

    useEffect(() => {
        async function getCat() {
            const res = await axios.get(
                "https://api.thecatapi.com/v1/images/search"
            );

            setCat(res.data);
        }

        getCat()

    }, []);
    console.log(cat, "cat")
    return (
        <div>
            {cat && <img src={cat[0].url} alt="cat image"/>}
        </div>
    )
}