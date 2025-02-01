import ShoeCard from './ShoeCard';
import { useState } from 'react';
import SeeMore from './SeeMore';
import { ChevronDownIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import {defaultShoe} from '../assets/skechersData'

const ProductGrid = ({ shoes, onQuickView }) => {

  const [currentlyShowing, setCurrentlyShowing] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleShowMore = async () => {
    setIsLoading(true);
    // Fetch more results here
    // Update currentlyShowing
    setIsLoading(false);
  };

    // State for managing the dropdown visibility
    const [isOpen, setIsOpen] = useState(false);
  
    // Array of available sizes - this could be passed as a prop in a real application
    const sizes = Array.from({ length: 20 }, (_, i) => 35 + i);
    
    // State for the currently selected size
    const [selectedSize, setSelectedSize] = useState(40);

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      {/* Header for gridLayout component */}
      <div className="flex items-center justify-between mb-8">
      {/* Left side - Category Label */}
      <div className="text-gray-700">
        Men Sport Shoes
      </div>
      
      {/* Right side - Size Controls */}
      <div className="flex items-center gap-4">
        {/* Size Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label="Select size"
          >
            <span className="text-sm text-gray-600">My Size</span>
            <span className="font-medium">{selectedSize}</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-10 w-40 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul
                className="py-1 overflow-auto max-h-60"
                role="listbox"
                aria-label="Size options"
              >
                {sizes.map((size) => (
                  <li
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer ${
                      selectedSize === size
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    role="option"
                    aria-selected={selectedSize === size}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Filter Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open filters"
        >
          <span>Filter</span>
          <AdjustmentsHorizontalIcon className="w-4 h-4" />
        </button>
      </div>
    </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">      
        {shoes.map((shoe) => (     
                <ShoeCard               
                shoe={shoe.name? shoe=shoe : shoe=defaultShoe}         
                onQuickView={onQuickView}
              />
        ))}      
      </div>

      <SeeMore
        currentlyShowing={currentlyShowing}
        totalResults={80}
        onShowMore={handleShowMore}
        isLoading={isLoading}
      />
    </div>    
  );
};

export default ProductGrid;