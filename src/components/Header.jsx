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
    { label: 'Sports', icon: sportIcon, path: '/sports' },
    { label: 'Formal', icon: formalIcon, path: '/formal' },
    { label: 'Hiking', icon: hikingIcon, path: '/hiking' },
    { label: 'Slippers', icon: slippersIcon, path: '/slippers' }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/*Logo and search */}
          <div className="flex items-center justify-start space-x-4 w-32">
            <h1 className="text-xl font-bold">SHOE</h1>
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>

          {/* Center section */}
          <div className="flex space-x-8">
            {mainNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleCategoryClick(item.label)}
                className={`text-sm transition-colors ${
                  selectedCategory === item.label
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center justify-end space-x-4 w-32">
            <ShoppingBagIcon className="w-5 h-5 text-gray-700 cursor-pointer" />
            <UserIcon className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>
        </nav>
      </div>

      {/* Subcategory navigation*/}
      {selectedCategory && (
        <div>
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex justify-center py-3">
              <div className="flex space-x-12">
                {shoeCategories.map((category) => (
                  <div
                    key={category.label}
                    className="flex flex-col items-center space-y-1 cursor-pointer group"
                  >
                    <div className="text-gray-400 group-hover:text-black transition-colors">
                      {/* You can replace these emojis with actual shoe icons */}
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