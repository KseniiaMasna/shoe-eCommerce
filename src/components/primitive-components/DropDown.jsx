import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const DropDown = ({ value, onChange }) => {
    // State to control dropdown visibility
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    
    // Generate sizes array for options
    const sizes = Array.from({ length: 20 }, (_, i) => 35 + i);

    // Handle size selection
    const handleSizeSelect = (size) => {
        onChange(size);
        setIsOpenDropDown(false);
    };

    return (
        // Added a container div to handle the button and dropdown positioning
        <div className="relative">
            {/* Trigger button for the dropdown */}
            <button
                onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md hover:border-neutral-400"
            >
                <span className="text-sm text-neutral-600">My Size</span>
                <span className="font-medium">{value}</span>
                <ChevronDownIcon className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Dropdown menu - only shown when isOpenDropDown is true */}
            {isOpenDropDown && (
                <div className="absolute z-10 w-40 mt-2 bg-neutral border bg-neutral-50 border-neutral-200 rounded-md shadow-lg">
                    <ul
                        className="py-1 overflow-auto max-h-60"
                        role="listbox"
                        aria-label="Size options"
                    >
                        {sizes.map((size) => (
                            <li
                                key={size}
                                onClick={() => handleSizeSelect(size)}
                                className={`px-4 py-2 text-sm cursor-pointer ${
                                    value === size
                                        ? 'bg-neutral-100 text-neutral-600'
                                        : 'text-neutral-700 hover:bg-neutral-100'
                                }`}
                                role="option"
                                aria-selected={value === size}
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropDown;