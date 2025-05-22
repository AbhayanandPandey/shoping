import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function Example() {
  const [showPopup, setShowPopup] = useState(true);

  const collections = [
    {
      title: "Women's",
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-collection-01.jpg',
    },
    {
      title: "Men's",
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-collection-02.jpg',
    },
    {
      title: 'Desk Accessories',
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-collection-03.jpg',
    },
  ];

  return (
    <>
      <div className="relative z-0">
        {/* All your page content here */}
        <div className="relative overflow-hidden bg-white">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
                  Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500 text-center">
                  This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                  if you live or die.
                </p>
              </div>
              <div>
                <div className="mt-10 ">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              alt=""
                              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='border-t border-gray-200 pt-10 mt-10 w-4/10 text-center'>
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-13 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          {/* Collection Cards */}
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <p className="text-sm">Shop the collection</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showPopup && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />
          {/* Popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
            <div className="relative bg-white rounded-lg max-w-md w-full p-8 mx-4 shadow-xl text-center">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer"
                aria-label="Close popup"
              >
                <FiX className="text-2xl" />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Special Offer!</h2>
              <p className="text-lg mb-6 text-gray-700">
                Use <span className="font-mono bg-indigo-100 px-2 py-1 rounded">FLAT50</span> to get <span className="font-bold text-indigo-600">50% off</span> your order.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition cursor-pointer"
              >
                Got it!
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
