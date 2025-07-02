import { getAllMandir } from "../api/getMandir"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";
import { ProductCard } from "../components/ProductCard";

export const Mandir = () => {

    const [mandir, setMandir] = useState([]);
    useEffect(
        () => {
            const getMandirData = async () => {
                const temp = await getAllMandir();
                setMandir(temp);
            } 
            getMandirData();
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
                    mandir.length > 0 && mandir.map(({_id, name, imageUrl, size}) => (<ProductCard key={_id} name={name} imageUrl={imageUrl} size={size}/>))
                }
                </div>
            </>
        )
}