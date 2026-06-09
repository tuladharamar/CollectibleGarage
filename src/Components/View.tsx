import { Link } from 'react-router-dom'
import Head from '../assets/Head.png'


const View = () => {

    
    return (
        <div className="relative  ">
            {/* Background Image */}
            <div className="relative w-full h-75 sm:h-75 md:h-75 lg:h-100 overflow-hidden">

                {/* Background Image */}
                <img
                    src={Head}
                    alt="Hero Banner"
                    className="w-full h-full object-cover mx-auto "
                />

                {/* Optional dark overlay */}
                <div className="absolute inset-0 bg-black/5" />

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
                    <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl bg-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">

                        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-wide italic">
                            HOT WHEELS
                        </h1>

                        <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold mt-2 italic">
                            DIECAST <span className="text-yellow-400">•</span> LEGO
                        </h2>

                        <p className="text-gray-200 mt-4 sm:mt-5 text-xs sm:text-sm md:text-lg leading-relaxed font-semibold px-2 sm:px-0">
                            Discover rare collectibles, premium diecast models, and the latest LEGO sets for every enthusiast.
                        </p>

                        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
                            <Link to="/collection" >
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base">
                                    SHOP COLLECTION
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
            {/* Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mx-auto max-w-7xl px-4">

                {/* Card 1 */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <Link to="/hotwheels">
                        <div className="relative aspect-4/3 overflow-hidden">
                            <img
                                src="https://i.etsystatic.com/40198223/r/il/114e7b/5584494506/il_570xN.5584494506_edcq.jpg"
                                alt="Hot Wheels"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        </div>
                    </Link>

                    <div className="p-5 bg-red-600">
                        <h1 className="font-extrabold text-2xl  text-white">Hot Wheels</h1>
                        <p className="text-sm text-white mt-2">
                            Mainlines, Premiums & Treasure Hunts
                        </p>
                    </div>

                </div>

                {/* Card 2 */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <Link to="/Diecast">
                        <div className="relative aspect-4/3 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f"
                                alt="Diecast Models"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        </div>
                    </Link>
                    <div className="p-5 bg-red-600"> 
                        <h1 className="font-bold text-xl  text-white">Diecast Models</h1>
                        <p className="text-sm  mt-2 text-white">
                            1:64, 1:43, 1:24 & 1:18 Scale Models
                        </p>
                    </div>

                </div>

                {/* Card 3 */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <Link to="/lego">
                        <div className="relative aspect-4/3 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b"
                                alt="LEGO Sets"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        </div>
                    </Link>

                    <div className="p-5 bg-red-600">
                        <h1 className="font-bold text-xl text-white">LEGO Sets</h1>
                        <p className="text-sm text-white mt-2">
                            Technic, Speed Champions & Creator Series
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default View