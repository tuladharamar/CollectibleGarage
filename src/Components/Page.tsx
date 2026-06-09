import { useState } from "react"
import DieCast from "../Constant/DieCast"
import { Link } from "react-router-dom";
const Page = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All')

    const categories = ['All', ...Array.from(new Set(DieCast.map(item=>item.category)))];

    const filteredData = activeCategory === 'All'? DieCast : DieCast.filter((p)=> p.category === activeCategory)
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-wrap gap-3 mb-10 justify-center ">
                    {categories.map(cat=>(
                        <div key={cat} className="px-6 py-2.5 rounded-full font-medium transition-all duration-300  cursor-pointer" onClick={()=>setActiveCategory(cat)}>
                            {cat}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-square">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Optional overlay on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-2">
                                    <p className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                                        {item.category}
                                    </p>
                                </div>

                                <h3 className="font-semibold text-xl text-gray-900 leading-tight mb-3 line-clamp-2">
                                    {item.title}
                                </h3>

                                <div className="flex items-end justify-between mt-auto">
                                    <p className="text-3xl font-bold text-gray-900">
                                        ${item.price}
                                    </p>

                                    {/* Optional button */}
                                    
                                        <Link to ={`/product/${item.id}`}>
                                        <button className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-xl transition-colors">
                                            View Details
                                        </button>
                                        </Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page