import { useEffect } from "react"
import { Navbar } from "../components/Navbar"
import { ProductCard } from "../components/ProductCard"
import { Searchbar } from "../components/Searchbar"
import { getAllFurnitures } from "../api/getFurnitures"
import { useState } from "react"
import { Link } from "react-router"

export const Home = () => {

    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        const fetchFurnitures = async () => {
            try {
                const temp = await getAllFurnitures();
                setFurnitures(() => temp || []);
                // console.log(temp)
                console.log("furnitures", furnitures);
            } catch (err) {
                console.error("Error Fetched", err);
            }
        }
        fetchFurnitures();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-20">
            <Searchbar />
            </div>
            <div className="flex flex-wrap gap-x-4 mx-[2rem] my-[1rem]">
            <div className="border w-fit p-2 text-lg font-medium text-white bg-blue-500">
                <a><Link to="/mandir"><div>Mandir</div></Link></a>
            </div>
            <div className="border w-fit p-2 text-lg font-medium text-white bg-blue-500">
                <a><Link to="/shoerack"><div>Shoe rack</div></Link></a>
            </div>
            <div className="border w-fit p-2 text-lg font-medium text-white bg-blue-500">
                <a><Link to="/acrylic-base"><div>Acrylic Base</div></Link></a>
            </div>
            <div className="border w-fit p-2 text-lg font-medium text-white bg-blue-500">
                <a><Link to="/doubleTop-base"><div>Double-Top Base</div></Link></a>
            </div>
            <div className="border w-fit p-2 text-lg font-medium text-white bg-blue-500">
                <a><Link to="/doubleDoor-dressing"><div>Double Door Dressing</div></Link></a>
            </div>
            </div>
            <div className="m-8 flex flex-wrap gap-x-4 gap-y-8">
            {
                furnitures.length > 0 && furnitures.map(({_id, name, imageUrl, size}) => (<ProductCard key={_id} name={name} imageUrl={imageUrl} size={size}/>))
            }
            </div>
        </>
    )
}