import imgPlaceholder from '../assets/img/shoe-img-placeholder.png'

const ShoeCard = ({shoe, onQuickView}) => {

    const name = shoe?.name || 'Shoe Name';
    const purpose = shoe?.purpose || 'Purpose';
    const price = shoe?.price || '0.00';
    const src = shoe?.src || imgPlaceholder;

    return (
        <div 
            onClick={() => onQuickView(shoe)}
            className="group cursor-pointer"
        >
            <div className="aspect-square bg-gray-100 mb-4">
                <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="space-y-1">                
                <h3 className="text-gray-900">{name}</h3>
                <p className="text-xs text-gray-500">{purpose}</p>    
                <p className="text-sm text-gray-900">€{price}</p>
            </div>
        </div>
    )
}

export default ShoeCard