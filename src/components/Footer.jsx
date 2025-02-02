import React from 'react';

const Footer = () => {
    
  const footerSections = [
    {
      title: 'Shoes',
      links: [
        { name: 'White Running Shoes', href: '#' },
        { name: 'Black Running Shoes', href: '#' },
        { name: 'For every day', href: '#' },
        { name: 'Super light', href: '#' },
        { name: 'Universal', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Creation process', href: '#' },
        { name: 'Contact Us', href: '#' }
      ]
    },
    {
      title: 'Help',
      links: [
        { name: 'Get Help', href: '#' },
        { name: 'Order Status', href: '#' },
        { name: 'Shipping and Delivery', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Reviews', href: '#' }
      ]
    }
  ];

  return (
    <footer className="border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 py-12 ">        
        <div className="mb-8">
          <a href="/" className="text-xl font-bold text-neutral-950">
            SHOE
          </a>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              {/* Section header */}
              <h3 className="text-sm font-medium text-gray-900">
                {section.title}
              </h3>
              {/* Navigation links */}
              <nav className="flex flex-col space-y-4">
                {section.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>        
        <div className="mt-12 pt-8 ">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} SHOE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;