import { useNavigate, useParams } from "react-router-dom"
import DieCast from "../Constant/DieCast";


const PageDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = DieCast.find(item => item.id === parseInt(id || ""))

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-2xl text-gray-500">Product not found</p>
            </div>
        )
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                ← Back to Shop
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="space-y-4">
                    <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
                        <a href={product.image} target="_blank">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />

                        </a>
                    </div>

                    {/* Thumbnail strip (add more images later) */}
                    <div className="flex gap-4">
                        <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden border-2 border-black cursor-pointer">
                            <img src={product.image} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col">
                    <div className="mb-2">
                        <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
                            {product.category}
                        </p>
                    </div>

                    <h1 className="text-4xl font-semibold text-gray-900 leading-tight mb-4">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Color:</span>
                            <span className="capitalize">{product.color}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Scale:</span>
                            <span>{product.scale}</span>
                        </div>
                    </div>

                    <div className="mb-10">
                        <p className="text-5xl font-bold tracking-tighter text-gray-900">
                            ${product.price}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="prose text-gray-600 mb-10">
                        <p>
                            Premium diecast model of the {product.title}. Highly detailed
                            1:64 scale replica perfect for collectors and enthusiasts.
                        </p>
                        <p className="mt-4">
                            Made with high-quality materials, accurate coloring, and intricate
                            detailing throughout the vehicle.
                        </p>
                    </div>

                    {/* Add to Cart Section */}
                    <div className="mt-auto">
                        <div className="flex gap-4">
                            <button className="flex-1 bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-medium text-lg transition-all active:scale-95">
                                Add to Cart
                            </button>

                            <button className="px-8 border border-gray-300 hover:border-gray-400 rounded-2xl transition-colors">
                                ❤️
                            </button>
                        </div>

                        <p className="text-center text-xs text-gray-500 mt-6">
                            Free shipping on orders over $50 • 30-day return policy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageDetail