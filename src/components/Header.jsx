import React, { useState } from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

//Custom icons for subcategories
import casualIcon from '../assets/custom-icons/casual.svg'
import sportIcon from '../assets/custom-icons/sport.svg'
import formalIcon from '../assets/custom-icons/formal.svg'
import hikingIcon from '../assets/custom-icons/hiking.svg'
import slippersIcon from '../assets/custom-icons/slippers.svg'

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState(true);

  const mainNavItems = [
    { label: 'Men', path: '/men' },
    { label: 'Women', path: '/women' },
    { label: 'Kids', path: '/kids' }
  ];
  const shoeCategories = [
    { label: 'Casual', icon: casualIcon, path: '/casual' },
    { label: 'Sport', icon: sportIcon, path: '/sports' },
    { label: 'Formal', icon: formalIcon, path: '/formal' },
    { label: 'Hiking', icon: hikingIcon, path: '/hiking' },
    { label: 'Slippers', icon: slippersIcon, path: '/slippers' }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <header className="border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/*Logo and search */}
          <div className="flex items-center justify-start space-x-4 w-32">
            <h1 className="text-xl font-bold">SHOE</h1>
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 cursor-pointer rounded-full hover:text-neutral-950" />

          </div>

          {/* Center section */}
          <div className="flex space-x-8">
            {mainNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleCategoryClick(item.label)}
                className={`text-md transition-colors text-neutral-700 hover:text-neutral-950`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center justify-end space-x-4 w-32">
            <ShoppingBagIcon className="w-6 h-6 text-gray-500 cursor-pointer hover:text-neutral-950" />
            <UserIcon className="w-6 h-6 text-gray-500 cursor-pointer hover:text-neutral-950" />
          </div>
        </nav>
      </div>

      {/* Subcategory navigation*/}
      {selectedCategory && (
        <div>
          <div className="max-w-7xl mx-auto px-4 pb-6">
            <nav className="flex justify-center py-3">
              <div className="flex space-x-4">
                {shoeCategories.map((category) => (
                  <div
                    key={category.label}
                    className="flex flex-col items-center p-3 rounded-2xl space-y-1 cursor-pointer group hover:bg-neutral-50"
                  >
                    <div className="text-gray-400 group-hover:text-black transition-colors">                      
                      <img src={category.icon} alt="" />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-black transition-colors">
                      {category.label}
                    </span>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;