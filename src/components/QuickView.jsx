import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ButtonPrimary from './primitive-components/ButtonPrimary';
import ButtonIcon from './primitive-components/ButtonIcon'


const QuickView = ({ product, onClose }) => {


  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="relative bg-white max-w-5xl w-full" onClick={(event) => event.stopPropagation()}>          
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <XMarkIcon className="w-6 h-6" />
          </button>
        {/* Carousel container*/}
        <img src={product.src} alt="" className='max-h-[360px] h-full w-full object-cover'/>

        {/* Content container */}
        <div className="mx-auto p-6 flex flex-col md:flex-row gap-10">
          {/* Left Section: Product Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.purpose}</p>
              <p className="text-1xl font-bold mt-2">€{product.price}</p>
              <p className="text-gray-600 mt-4">{product.description}</p>
            </div>
          
          <div className="flex-1">
            
            {/* Select Colors */}
            <div className="mb-6">
              <h3 className="text-gray-500 font-normal mb-2">Select color:</h3>
              <div className="flex gap-6">
                {product.colors.map((color) => (
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 ${color.equivalent} rounded-full`}></div>
                    <p className="text-sm text-gray-800 mt-1">{color.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Select Size */}
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 font-normal mb-2">Select Your size:</h3>              
            </div>
            <div className="flex flex-wrap gap-2">
              {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 border border-gray-300 text-gray-700 rounded-md hover:bg-neutral-900 hover:text-neutral-100"
                  >
                    {size}
                  </button>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className='w-full flex justify-end pl-6 pr-6 pb-6'>
              <ButtonPrimary label='Add to My Cart'/>
              <ButtonIcon label='Discover more' />
        </div>
      </div>
    </div>
  );
};

export default QuickView;

