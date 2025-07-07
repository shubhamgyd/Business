export const ProductCard = ({imageUrl, name, size}) => {
    return (
        <>
            <div className="w-80 bg-white border shadow-md border-2 p-2 overflow-hidden rounded-xl hover:shadow-lg transition-shadow duration-300">
                <img className="w-full object-cover" src={imageUrl}></img>
                <div className="font-medium">{name}</div>
                <div className="font-medium">Size: {size}</div>
            </div>
        </>
    )
}