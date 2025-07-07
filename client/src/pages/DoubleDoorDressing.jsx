import { getAllDoubleDoorDressing } from "../api/getDoubleDoorDressing"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";
import { ProductCard } from "../components/ProductCard";

export const DoubleDoorDressing = () => {

    const [doubleDoorDressing, setDoubleDoorDressing] = useState([]);
    useEffect(
        () => {
            const getDoubleDoorDressingData = async () => {
                const temp = await getAllDoubleDoorDressing();
                setDoubleDoorDressing(temp);
            } 
            getDoubleDoorDressingData();
        }, []
    )

    return (
            <>
                <Navbar />
                <div className="flex justify-center mt-20">
                </div>
                <div className="m-8 flex flex-wrap gap-x-4 gap-y-8">
                {
                    doubleDoorDressing.length > 0 && doubleDoorDressing.map(({_id, name, imageUrl, size}) => (<ProductCard key={_id} name={name} imageUrl={imageUrl} size={size}/>))
                }
                </div>
            </>
        )
}