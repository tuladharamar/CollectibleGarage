import DieCast from "../Constant/DieCast"
import { useCart } from "../Context/CartContext";
import Head from '../assets/Head.png'

const Lego = () => {
    const productLego = DieCast.filter(item => item.category.includes('Lego'));
    const { addToCart } = useCart();
    return (
        <>
            <div className="relative w-full h-75 sm:h-95 md:h-70 lg:h-70 overflow-hidden">

                {/* Background Image */}
                <img
                    src={Head}
                    alt="Hero Banner"
                    className="w-full h-full object-cover mx-auto "
                />

                {/* Optional dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* LEGO Logo */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/3840px-LEGO_logo.svg.png"
                        alt="Lego"
                        className="w-10 sm:w-16 md:w-20 rounded-sm shadow-xl"
                    />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white italic border-2 border-yellow-400 px-5 py-3 rounded-2xl'>
                        Lego
                    </h1>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        LEGO Collection
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Premium interlocking plastic bricks and imaginative building sets from the legendary LEGO brand.
                    </p>
                    <p className="text-sm text-gray-500 mt-3">
                        {productLego.length} Exclusive Models
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {productLego.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-square bg-gray-50">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Optional badge */}
                                <div className="absolute top-3 right-3 bg-white/90 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                                    LEGO
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-semibold text-lg leading-tight text-gray-900 line-clamp-2 min-h-[3.2em]">
                                    {item.title}
                                </h3>

                                {item.theme && (
                                    <p className="text-sm text-gray-500 mt-1">{item.theme}</p>
                                )}

                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">
                                            Rs. {item.price}
                                        </span>
                                    </div>

                                    {item.pieces && (
                                        <div className="text-xs text-gray-500 text-right">
                                            {item.pieces} pieces
                                        </div>
                                    )}
                                </div>

                                {/* Action Button */}
                                <button className="mt-5 w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-colors duration-200"
                                    onClick={() => addToCart({ ...item, price: Number(item.price) })}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Lego