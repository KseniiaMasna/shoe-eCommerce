const skechersData = [
    {
      name: "Skechers GOwalk 6",
      price: 79.99,
      purpose: "Walking",      
      src: 'src/assets/img/irene-kredenets-dwKiHoqqxk8-unsplash.jpg',
      availableSizes: [38, 39, 40, 41, 42, 43, 50],
      colors: [
        { name: "Black", equivalent: "bg-gray-900" },
        { name: "Grey", equivalent: "bg-gray-500" },
        { name: "Navy", equivalent: "bg-blue-900" }
      ],
      description: "Experience ultimate comfort with GOwalk 6, featuring responsive cushioning and a breathable upper.",
      favorite: true
    },
    {
      name: "Skechers Max Cushioning Elite",
      price: 99.99,
      purpose: "Running",      
      src: "src/assets/img/maria-fernanda-pissioli-NRXeq7lmjaQ-unsplash.jpg",
      availableSizes: [39, 40, 41, 42, 43, 44, 45],
      colors: [
        { name: "Blue", equivalent: "bg-blue-500" },
        { name: "Red", equivalent: "bg-red-500" },
        { name: "Black", equivalent: "bg-gray-900" }
      ],
      description: "Max Cushioning Elite provides premium performance and comfort for long runs.",
      favorite: false
    },
    {
      name: "Skechers Arch Fit",
      price: 89.99,
      purpose: "Support & Comfort",      
      src: "src/assets/img/hipkicks-HcqA34-uWo4-unsplash.jpg",
      availableSizes: [37, 38, 39, 40, 41, 42, 43],
      colors: [
        { name: "White", equivalent: "bg-white" },
        { name: "Beige", equivalent: "bg-yellow-100" }, // Tailwind doesn’t have "Beige", so `yellow-100` is a close match
        { name: "Black", equivalent: "bg-gray-900" }
      ],
      description: "Designed for all-day wear, the Arch Fit system provides enhanced support and cushioning.",
      favorite: true
    },
    {
      name: "Skechers Ultra Flex 3.0",
      price: 74.99,
      purpose: "Casual Wear",      
      src: 'src/assets/img/maria-fernanda-pissioli-i8OruGmFXtw-unsplash.jpg',
      availableSizes: [36, 37, 38, 39, 40, 41, 42],
      colors: [
        { name: "Pink", equivalent: "bg-pink-500" },
        { name: "Grey", equivalent: "bg-gray-500" },
        { name: "Black", equivalent: "bg-gray-900" }
      ],
      description: "Slip into flexibility and comfort with Ultra Flex 3.0’s stretchable knit upper and responsive cushioning.",
      favorite: false
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  
  export default skechersData;
  