import { getAllDoubleTopBase } from "../api/getDoubleTopBase"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";
import { ProductCard } from "../components/ProductCard";

export const DobuleTopBase = () => {

    const [doubleTopBase, setDoubleTopBase] = useState([]);
    useEffect(
        () => {
            const getDoubleTopBaseData = async () => {
                const temp = await getAllDoubleTopBase();
                setDoubleTopBase(temp);
            } 
            getDoubleTopBaseData();
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
                    doubleTopBase.length > 0 && doubleTopBase.map(({_id, name, imageUrl, size}) => (<ProductCard key={_id} name={name} imageUrl={imageUrl} size={size}/>))
                }
                </div>
            </>
        )
}