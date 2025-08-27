import React from 'react';
import { Link } from 'react-router-dom';
import birlaOpuslogo from "../../assets/birlaOpusRoundLogo.jpeg";

const BrandShowcase = () => {
  const paintBrands = [
    {
      name: "Asian Paints",
      image: "https://static.asianpaints.com/content/dam/apcolourcatalogue/asset/ap-revamp/waterproofing/landing-page/1B72-desk.webp",
      description: "India's largest paint company offering premium quality paints with vibrant colors and lasting durability.",
      color: "from-red-500 to-orange-500",
      specialty: "Premium Quality",
      logoImage:"https://i.pinimg.com/originals/8a/41/3c/8a413c52f1c647e8dc955ba828cabaf5.jpg"
    },
    {
      name: "Berger Paints",
      image: "https://www.bergerbd.com/wp-content/uploads/2024/04/Luxury-Silk-Matte.webp",
      description: "Trusted for over 100 years, delivering innovative paint solutions with superior finish and protection.",
      color: "from-blue-600 to-cyan-500",
      specialty: "Innovation Leader",
      logoImage:"https://play-lh.googleusercontent.com/LX7jamj9O1hsmMBmp7jptwHlm-pGBaZag29tLDqM46AktD6rs1vBQXfzH_ADhYk_"
    },
    {
      name: "Nerolac Paints",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/474421963/EP/HP/YW/211892626/nerolac-decorative-paint.jpg",
      description: "Excellence in paint technology with eco-friendly formulations and wide range of decorative options.",
      color: "from-green-500 to-emerald-500",
      specialty: "Eco-Friendly",
      logoImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF88J9Kjh1tz8OIWvgdFlsRyR9Q1XbycLceQ&s"
    },
    {
      name: "Dulux Paints",
      image: "https://www.financialexpress.com/wp-content/uploads/2022/04/AkzoNobel-India-launches-the-all-new-Dulux-Velvet-Touch-with-Tru-Color-technology.jpg",
      description: "Global expertise meets local preferences with premium paints known for exceptional coverage and finish.",
      color: "from-purple-600 to-pink-500",
      specialty: "Global Excellence",
      logoImage:"https://cdn.dribbble.com/userupload/34933791/file/original-429c8a9fbe2cf813f4aba8c1bf7ded1b.png?resize=752x&vertical=center"
    },
    {
      name: "Nippon Paint",
      image: "https://nipponpaint.co.in/wp-content/uploads/2024/09/Weatherbond-Advance-Exterior-Wall-Paint-Nippon-min.jpg",
      description: "Japanese precision in paint manufacturing with advanced technology and superior weather resistance.",
      color: "from-indigo-600 to-blue-500",
      specialty: "Weather Resistant",
      logoImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pvAWEqpFMdh9RhePX7cRtzK8tw4vCzGigA&s"
    },
    {
      name: "Birla Opus Paint",
      image: "https://madaboutmarketing.com/wp-content/uploads/2025/02/Advertising-Blog-61.png",
      description: "Legacy brand offering reliable paint solutions with excellent coverage and long-lasting protection.",
      color: "from-amber-500 to-yellow-500",
      specialty: "Trusted Legacy",
      logoImage: birlaOpuslogo
    }
  ];

  return (
    <section className=" bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🏷️ Trusted Paint Brands
          </h2>
          <p className="text-xl text-gray-700">
            We stock premium paints from India's most trusted manufacturers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintBrands.map((brand, index) => (
            <div
              key={index}
              className="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100">
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Brand Logo Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${brand.color} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 border-2 border-white shadow-lg`}>
                      <img className='rounded-full' src={brand.logoImage} alt="" />
                    </div>
                  </div>

                  {/* Specialty Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`bg-gradient-to-r ${brand.color} text-white text-xs px-3 py-1 rounded-full font-semibold border border-white shadow-lg`}>
                      {brand.specialty}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {brand.description}
                  </p>
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to={'/products'}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Explore All Brands
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;