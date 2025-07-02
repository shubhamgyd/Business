import { getAllShoerack } from "../api/getShoerack"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";
import { ProductCard } from "../components/ProductCard";

export const Shoerack = () => {

    const [shoerack, setShoerack] = useState([]);
    useEffect(
        () => {
            const getShoerackData = async () => {
                const temp = await getAllShoerack();
                setShoerack(temp);
            } 
            getShoerackData();
        }, []
    )

    return (
            <>
                <Navbar />
                <div className="flex justify-center mt-20">
                <Searchbar />
                </div>
                <div className="m-8 flex flex-wrap gap-x-4 gap-y-8">
                {
                    shoerack.length > 0 && shoerack.map(({_id, name, imageUrl, size}) => (<ProductCard key={_id} name={name} imageUrl={imageUrl} size={size}/>))
                }
                </div>
            </>
        )
}