import { Link } from "react-router"
export const Page = ({page}) => {

    return (
        <Link to={"/"+page} className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md" >{page.toUpperCase()}</Link>
    )
}