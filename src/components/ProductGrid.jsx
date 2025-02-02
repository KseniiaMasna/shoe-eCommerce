import { useState } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import {defaultShoe} from '../assets/skechersData'
import DropDown from './primitive-components/DropDown';
import SeeMore from './SeeMore';
import ShoeCard from './ShoeCard';

const ProductGrid = ({ shoes, onQuickView }) => {
  const [selectedSize, setSelectedSize] = useState(40);

  const [currentlyShowing, setCurrentlyShowing] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleShowMore = async () => {
    setIsLoading(true);
    // Fetch more results here
    // Update currentlyShowing
    setIsLoading(false);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className="flex items-center justify-between mb-8">
        {/* <div className="text-gray-700"> Men Sport Shoes</div> */}
        <h2 className="text-gray-900 font-semibold text-xl">Men Sport Shoes</h2>
        <div className='flex gap-2'>
          <DropDown value={selectedSize} onChange={setSelectedSize}/>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 border border-neutral-200 rounded-md hover:border-neutral-400 focus:outline-none focus:ring-2 focus:bg-neutral-900"
              aria-label="Open filters"
            >
            <span>Filters</span>
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">      
        {shoes.map((shoe) => (     
                <ShoeCard               
                shoe={shoe.name ? shoe : defaultShoe}         
                onQuickView={onQuickView}
              />
        ))}      
      </div>
      <SeeMore
        currentlyShowing={currentlyShowing}
        totalResults={12}
        onShowMore={handleShowMore}
        isLoading={isLoading}
      />
    </div>    
  );
};

export default ProductGrid;