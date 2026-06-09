import { Link } from 'react-router-dom';
import Head from '../assets/Head.png';
import DieCast from '../Constant/DieCast';
import {useCart} from '../Context/CartContext';

const HotWheels = () => {
    // Updated filter to match your latest diecast.ts (category: ["Diecast"])
    const hotwheels = DieCast.filter(item =>
        item.category.includes('Diecast') || item.category.includes('Hotwheels')
    );
    const {addToCart} = useCart();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative w-full h-75 sm:h-75 md:h-75 overflow-hidden">
                {/* Background Image */}
                <img
                    src={Head}
                    alt="Hot Wheels Hero"
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Hot Wheels Branding */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <div className="bg-white text-red-600 font-black text-xl sm:text-3xl px-4 py-1 rounded shadow-xl tracking-wider">
                        HOT WHEELS
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl tracking-tight">
                        HOTWHEELS COLLECTION
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Hot Wheels Diecast
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Premium 1:64 scale diecast cars from the legendary Hot Wheels brand
                    </p>
                    <p className="text-sm text-gray-500 mt-3">
                        {hotwheels.length} Exclusive Models
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {hotwheels.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="overflow-hidden aspect-4/3 bg-gray-100 relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    1:64
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-2">
                                    Hot Wheels
                                </p>

                                <Link
                                    to={`/collectionDetails/${product.id}`}
                                    className="block hover:text-red-600 transition-colors duration-200"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 min-h-[3.2rem]">
                                        {product.title}
                                    </h3>
                                </Link>

                                <p className="mt-4 text-3xl font-semibold text-gray-900">
                                    Rs. {parseInt(product.price).toLocaleString()}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-5">
                                    <span className="px-4 py-1.5 bg-red-50 text-red-700 text-xs font-medium rounded-full">
                                        {product.scale}
                                    </span>
                                    <span className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                                        {product.color}
                                    </span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto pt-6">
                                    <button className="flex-1 py-3.5 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-semibold rounded-2xl transition-all duration-200"
                                    onClick={() => addToCart({ ...product, price: Number(product.price) })}>
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl transition-all duration-200">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotWheels;