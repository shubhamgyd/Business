export const ProductCard = ({imageUrl, name, size}) => {
    return (
        <>
            <div className="bg-red w-[20rem] border-2 p-2 rounded-md">
                <img className="w-3xs" src={imageUrl}></img>
                <div className="font-medium">{name}</div>
                <div className="font-medium">Size: {size}</div>
            </div>
        </>
    )
}