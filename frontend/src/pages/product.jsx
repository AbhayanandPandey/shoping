import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const ProductPage = () => {
    const product = {
        title: "Men's Classic Denim Jacket",
        image:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
        gallery: [
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
            
        ],
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        offers: [
            "10% off on first purchase",
            "Extra 5% off with code STYLE5",
            "Free shipping on orders over ₹999",
        ],
        rating: 4.4,
        reviewCount: 178,
        specs: [
            "100% Cotton",
            "Machine Wash",
            "Slim Fit",
            "Button Closure"
        ],
        warranty: "6 Months Manufacturer Warranty",
        additionalSpec: "Durable stitching and comfortable fit",
    };

    const [mainImage, setMainImage] = useState(product.image);

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Image Gallery */}
                <div>
                    <div className="w-full h-[500px] flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
                        <img src={mainImage} alt="Product" className="h-full object-contain" />
                    </div>
                    <div className="flex gap-4 mt-4 overflow-x-auto">
                        {product.gallery.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="Thumbnail"
                                onClick={() => setMainImage(img)}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${mainImage === img ? "border-blue-500" : "border-transparent"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Product Info */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <div className="text-2xl text-green-600 font-semibold">
                        ₹{product.price}
                        <span className="line-through text-gray-400 text-lg ml-3">
                            ₹{product.originalPrice}
                        </span>
                        <span className="ml-3 text-sm text-green-500">({product.discount}% off)</span>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-1">Available Offers</h2>
                        <ul className="list-disc ml-5 text-sm text-gray-700">
                            {product.offers.map((offer, idx) => (
                                <li key={idx}>{offer}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-1">Product Details</h2>
                        <ul className="list-disc ml-5 text-sm text-gray-700">
                            {product.specs.map((spec, idx) => (
                                <li key={idx}>{spec}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-1">Additional Info</h2>
                        <p className="text-sm text-gray-600 ml-5">{product.additionalSpec}</p>
                    </div>

                    <div className="text-sm text-gray-600">
                        <strong>Warranty:</strong> {product.warranty}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                            Buy Now
                        </button>
                    </div>

                    <div className="mt-4 flex items-center text-sm text-gray-600">
                        <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">{product.rating} ★</span>
                        <span>({product.reviewCount} Reviews)</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
