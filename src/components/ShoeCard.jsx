const ShoeCard = ({shoe, onQuickView}) => {

    return (
        <div 
            onClick={() => onQuickView(shoe)}
            className="group cursor-pointer"
        >
            <div className="aspect-square bg-gray-100 mb-4">
                <img
                    src={shoe.src}
                    alt={shoe.name}
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="space-y-1">                
                <h3 className="text-gray-900">{shoe.name}</h3>
                <p className="text-xs text-gray-500">{shoe.purpose}</p>    
                <p className="text-sm text-gray-900">€{shoe.price}</p>
            </div>
        </div>
    )
}

export default ShoeCard