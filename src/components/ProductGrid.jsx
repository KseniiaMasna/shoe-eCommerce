import ShoeCard from './ShoeCard';
import imgPlaceholder from '../assets/img/shoe-img-placeholder.png'

const defaultShoe = {
  name: "Default Product",
  purpose: "General Use",
  price: "99.99",
  description: "This is a default product description.",
  src: imgPlaceholder, 
  colors: [
    { name: "color", equivalent: "bg-neutral-300" },
    
  ],
  availableSizes: ["36", "37", "38", "39"],
}

const ProductGrid = ({ shoes, onQuickView }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-8">      
      {shoes.map((shoe) => (     
              <ShoeCard               
              shoe={shoe.name? shoe=shoe : shoe=defaultShoe}         
              onQuickView={onQuickView}
            />
      ))}      
    </div>
  );
};

export default ProductGrid;