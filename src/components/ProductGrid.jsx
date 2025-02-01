import ShoeCard from './ShoeCard';
import { useState } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import {defaultShoe} from '../assets/skechersData'
import DropDown from './primitive-components/DropDown';

const ProductGrid = ({ shoes, onQuickView }) => {
  const [selectedSize, setSelectedSize] = useState(40);

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className="flex items-center justify-between mb-8">
        {/* <div className="text-gray-700"> Men Sport Shoes</div> */}
        <h2 className="text-gray-900 font-semibold text-xl">Men Sport Shoes</h2>
        <div className='flex gap-2'>
          <DropDown value={selectedSize} onChange={setSelectedSize}/>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                shoe={shoe.name? shoe=shoe : shoe=defaultShoe}         
                onQuickView={onQuickView}
              />
        ))}      
      </div>
    </div>    
  );
};

export default ProductGrid;