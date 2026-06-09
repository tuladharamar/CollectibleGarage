

const Footer = () => {
    const data = new Date();
    const date = data.getFullYear();
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">DieCast Collection</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium 1:64 scale diecast cars for collectors and enthusiasts.
                            Quality models from Hot Wheels and more.
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">📘</a>
                            <a href="#" className="hover:text-white transition-colors">🐦</a>
                            <a href="#" className="hover:text-white transition-colors">📸</a>
                            <a href="#" className="hover:text-white transition-colors">▶️</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/diecast" className="hover:text-white transition-colors">All Diecast Cars</a></li>
                            <li><a href="/hotwheel" className="hover:text-white transition-colors">Hot Wheels</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Limited Editions</a></li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/view" className="hover:text-white transition-colors">Categories</a></li>
                            <li><a href="/view" className="hover:text-white transition-colors">Brands</a></li>
                            <li><a href="/diecast" className="hover:text-white transition-colors">Scale Models</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>

                        <div className="mt-6">
                            <p className="text-sm text-gray-400">📧 Email us at:</p>
                            <a href="mailto:info@diecastcollection.com" className="text-blue-400 hover:text-blue-300 text-sm">
                                info@diecastcollection.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {date} DieCast Collection. All Rights Reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex items-center gap-4 text-xl">
                        <span>💳</span>
                        <span>🅿️</span>
                        <span>🍎</span>
                        <span>💰</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer