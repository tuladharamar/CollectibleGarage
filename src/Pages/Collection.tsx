import { Link, useNavigate } from 'react-router-dom'
import DieCast from '../Constant/DieCast'
import Head from '../assets/Head.png'
import { useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useCart } from '../Context/CartContext'

type SearchProps = {
    search: string;
}

const Collection = ({ search }: SearchProps) => {
    const [activeCategories, setActiveCategories] = useState<any>('All')
    const navigate = useNavigate();
    const categories = ['All', ...Array.from(new Set(DieCast.map(item => item.category)))];

    const filteredCategories = activeCategories === 'All' ? DieCast : DieCast.filter((p) => p.category === activeCategories);

    const filteredProduct = filteredCategories.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))

    const {addToCart} = useCart()

    // removed URL search param extraction to avoid duplicate 'search' identifier

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
                        Collections
                    </h1>
                </div>

            </div>
            <div className='flex justify-center items-center py-10 gap-5 '>
                {categories.map(cat => (
                    <div key={String(cat)} onClick={() => setActiveCategories(cat)}
                        className={`border-2 border-gray-200 px-5 py-2 rounded-2xl cursor-pointer ${activeCategories === cat ? 'bg-blue-500 text-white' : 'text-black'} transition-all duration-300`} >
                        {cat}
                    </div>
                ))}
            </div>
            {search && (
                <div className="max-w-7xl mx-auto px-4">
                    <span className='' onClick={()=>navigate(-1)}>
                        <IoMdArrowRoundBack />
                    </span>
                    <h2 className="text-xl font-bold mt-5">
                        Results for: "{search}"
                    </h2>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

                    {filteredProduct.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="overflow-hidden aspect-4/3 bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-blue-600 text-sm font-semibold uppercase mb-2">
                                    {product.category}
                                </p>

                                <Link to={`/collectionDetails/${product.id}`}>
                                    <h3 className="text-xl font-bold">
                                        {product.title}
                                    </h3>
                                </Link>

                                <p className="mt-4 text-2xl font-semibold">
                                    Rs. {product.price.toLocaleString()}
                                </p>

                                {/* Tags */}
                                <div className="flex gap-2 mt-5">
                                    <span className="px-4 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                                        {product.scale}
                                    </span>
                                    <span className="px-4 py-1 bg-gray-50 text-gray-700 text-xs rounded-full">
                                        {product.color}
                                    </span>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-8">
                                    <button className="flex-1 py-3 bg-yellow-400 rounded-2xl" onClick={()=>addToCart(product)}>
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 py-3 bg-red-500 text-white rounded-2xl">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Collection