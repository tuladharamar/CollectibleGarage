import { useState } from "react";
import { BiCart, BiSearch, BiMenu, BiX } from "react-icons/bi";
import Nav from "../Constant/Nav";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useCart } from '../Context/CartContext';
type SearchProps = {
    search: string;
    setSearch: (search: string) => void;
}

const Navbar = ({ search, setSearch }: SearchProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const { cart } = useCart();

    const navigate = useNavigate();


    const handleSearch = () => {
        if (!search.trim()) return;
        navigate(`/collection?search=${encodeURIComponent(search)}`);

    };



    const clearQuery = () => {
        setSearch("");
        setSearchOpen(!searchOpen)

    }


    return (
        <header className="bg-linear-to-r from-red-500 to-black py-4">
            <nav className="max-w-400 mx-auto flex justify-between items-center px-4 relative">
                {/* Logo */}
                <div className="text-yellow-400 font-bold text-2xl md:text-3xl">
                    <Link to="/">
                        <h1>Collectible Garages</h1>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center text-white gap-6 text-xl font-bold">
                    {Nav.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className="font-serif hover:text-gray-300 transition duration-300 relative"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4 text-white text-2xl">
                    <BiSearch className="cursor-pointer" onClick={() => setSearchOpen(!searchOpen)} />
                    <div className="">
                        <Link to='/cart'>
                            <BiCart className="cursor-pointer" />
                            <span className="absolute -top-2 right-12 md:right-0 bg-red-500 text-white text-xs px-2 rounded-full">
                                {cart.length}
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <BiX size={30} /> : <BiMenu size={30} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className={`md:hidden bg-black text-white overflow-hidden transition-all duration-300 `}
                >
                    <div className="flex flex-col items-center gap-4 absolute top-15 z-10 bg-black w-full py-10">
                        {Nav.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-yellow-400 transition duration-300 py-5"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

            )}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div className="absolute top-18 right-50 z-20 shadow-2xl "
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20
                        }}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-white   rounded-xl px-3 py-1"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                        <span className={`absolute top-2 right-2 `}>
                            {search?.length > 0 ? <BiSearch onClick={handleSearch} /> : <RxCross1 onClick={clearQuery} />}
                        </span>
                    </motion.div>
                )}


            </AnimatePresence>

        </header>
    );
};

export default Navbar;