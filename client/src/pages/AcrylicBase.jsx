import { getAllAcrylicBase } from "../api/getAcrylicBase"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";
import { ProductCard } from "../components/productCard";

export const AcrylicBase = () => {

    const [acrylicBase, setAcrylicBase] = useState([]);
    useEffect(
        () => {
            const getAcrylicBaseData = async () => {
                const temp = await getAllAcrylicBase();
                setAcrylicBase(temp);
            } 
            getAcrylicBaseData();
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
                    acrylicBase.length > 0 && acrylicBase.map(({_id, name, imageUrl, size}) => (<ProductCard key={_id} name={name} imageUrl={imageUrl} size={size}/>))
                }
                </div>
            </>
        )
}