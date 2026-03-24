import { useEffect } from "react"
import { Navbar } from "../components/Navbar"
import { ProductCard } from "../components/ProductCard"
import { Searchbar } from "../components/Searchbar"
import { getAllFurnitures } from "../api/getFurnitures"
import { useState } from "react"
import { Page } from "../components/Page"

const Pages = ["mandir", "shoerack", "acrylic-base", "doubleTop-base", "doubleDoor-dressing"]

export const Home = () => {

    const [furnitures, setFurnitures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const wakeServer = fetch("https://your-backend-url.onrender.com/all");
        const fetchFurnitures = async () => {
            try {
                const temp = await getAllFurnitures();
                setFurnitures(() => temp || []);
            } catch (err) {
                console.error("Error Fetched", err);
            } finally {
                setLoading(false);
            }
        }
        fetchFurnitures();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-5 md:mt-10">
            <Searchbar />
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2 mx-[0.5rem] my-[0.5rem] md:mx-[2rem] md:my-[1.5rem]">
            
                {Pages.map((page) => (<Page page={page} />))}
            </div>
            <div className="m-8 flex flex-wrap gap-x-4 gap-y-8">
            {   loading ? <div>Please wait, our server was in sleep mode. Thankyou for your patience.</div> : furnitures.length > 0 && furnitures.map(({_id, name, imageUrl, size}) => (<ProductCard key={_id} name={name} imageUrl={imageUrl} size={size}/>))
            }
            </div>
        </>
    )
}