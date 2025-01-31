import React, { useState } from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

const Header = () => {
  // State to track the selected main category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Main navigation items
  const mainNavItems = [
    { label: 'Men', path: '/men' },
    { label: 'Women', path: '/women' },
    { label: 'Kids', path: '/kids' }
  ];

  // Shoe category items with their respective icons
  const shoeCategories = [
    { label: 'Casual', icon: '👟', path: '/casual' },
    { label: 'Sports', icon: '🏃', path: '/sports' },
    { label: 'Formal', icon: '👞', path: '/formal' },
    { label: 'Hiking', icon: '🥾', path: '/hiking' },
    { label: 'Slippers', icon: '🩴', path: '/slippers' }
  ];

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <header className="border-b border-gray-200">
      {/* Main header section */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Left section: Logo and search */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">SHOE</h1>
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>

          {/* Center section: Main navigation */}
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

          {/* Right section: Cart and account */}
          <div className="flex items-center space-x-4">
            <ShoppingBagIcon className="w-5 h-5 text-gray-700 cursor-pointer" />
            <UserIcon className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>
        </nav>
      </div>

      {/* Subcategory navigation - only shown when a main category is selected */}
      {selectedCategory && (
        <div className="border-t border-gray-200">
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
                      {category.icon}
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