import ShoeCard from './ShoeCard';
import urlImage from '../assets/img/irene-kredenets-dwKiHoqqxk8-unsplash.jpg'

const ProductGrid = ({ shoes, onQuickView }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-8">      
      {shoes.map((shoe) => (  
                    
              <ShoeCard               
              shoe={shoe}         
              onQuickView={onQuickView}
            />
      ))}

      
    </div>
  );
};

export default ProductGrid;