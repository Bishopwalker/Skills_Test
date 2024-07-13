import  {useState} from 'react';
import { Star, ShoppingCart, Facebook, Twitter, Instagram, Camera, Menu } from 'lucide-react';

const CameraHome = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        // Simulating an API call to OpenAI
        setTimeout(() => {
            setSearchResult(`Here's what I found about "${searchQuery}": This is a simulated AI response about cameras and photography equipment.`);
            setIsSearching(false);
        }, 1500);
    };
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div
                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">CamStore
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {['Home', 'Products', 'About', 'Contact'].map((item) => (
                                <li key={item} className="relative group">
                                    <a href="#"
                                       className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">{item}</a>
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 ease-in-out group-hover:w-full"></span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="md:hidden text-gray-600"><Menu size={24}/></button>
                </div>
            </header>


            <main className="flex-grow container mx-auto px-4 py-8">



                <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ask AI About Cameras</h2>
                    <form onSubmit={handleSearch} className="flex flex-col space-y-4">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Ask about camera features, recommendations, etc."
                                className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                            <button
                                type="submit"
                                className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200 ease-in-out flex items-center"
                                disabled={isSearching}
                            >
                                {isSearching ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Searching...
                                    </>
                                ) : (
                                    <>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                        </svg>
                                        Search
                                    </>
                                )}
                            </button>
                        </div>
                        {searchResult && (
                            <div className="bg-gray-100 rounded-lg p-4 mt-4">
                                <p className="text-gray-800">{searchResult}</p>
                            </div>
                        )}
                    </form>
                </div>

                <main className="flex-grow container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-12">



                        <div className="lg:w-1/2 space-y-4">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden aspect-w-4 aspect-h-3">
                                <img src="/api/placeholder/800/600" alt="Main product image"
                                     className="object-cover w-full h-full"/>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((n) => (
                                    <div key={n}
                                         className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
                                        <img src={`/api/placeholder/200/200?text=Thumb ${n}`} alt={`Thumbnail ${n}`}
                                             className="object-cover w-full h-full"/>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-900">Pro Camera X2000</h1>
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-purple-600">$1,299.99</span>
                                <div
                                    className="flex items-center bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                                    <Star size={16} className="mr-1"/>
                                    4.8 (240 reviews)
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Experience unparalleled image quality with the Pro Camera X2000. Featuring a 50MP
                                full-frame sensor, 8K video capabilities, and advanced AI-powered autofocus, this camera
                                is perfect for professionals and enthusiasts alike. Its weather-sealed body and
                                intuitive controls make it ideal for any shooting scenario.
                            </p>
                            <button
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out flex items-center justify-center">
                                <ShoppingCart className="mr-2" size={20}/> Add to Cart
                            </button>
                            <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                                <h3 className="font-semibold text-gray-900">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>50MP full-frame sensor</li>
                                    <li>8K video recording</li>
                                    <li>AI-powered autofocus</li>
                                    <li>Weather-sealed body</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[1, 2].map((reviewId) => (
                                <div key={reviewId}
                                     className="bg-white rounded-lg shadow-md p-6 space-y-4 transform hover:scale-105 transition-all duration-200 ease-in-out">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-900">PhotoPro{reviewId}</span>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} size={16} className="text-yellow-400"/>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">This camera exceeded all my expectations. The image
                                        quality is stunning, and the autofocus is lightning-fast. Highly recommended for
                                        both stills and video work!</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Extra Information */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <Camera size={32} className="text-purple-600"/>
                            <h2 className="text-2xl font-bold text-gray-900">Shipping & Warranty</h2>
                        </div>
                        <p className="text-gray-600">Enjoy free express shipping on orders over $1000. Your Pro Camera
                            X2000 comes with a comprehensive 3-year manufacturer warranty, ensuring peace of mind with
                            your purchase.</p>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <input type="email" placeholder="Enter your email"
                                   className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
                            <button
                                className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200 ease-in-out">Subscribe
                            </button>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Our
                                        Story</a></li>
                                    <li><a href="#"
                                           className="hover:text-purple-400 transition-colors duration-200">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Contact
                                        Us</a></li>
                                    <li><a href="#"
                                           className="hover:text-purple-400 transition-colors duration-200">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Policies</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Privacy
                                        Policy</a></li>
                                    <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Terms
                                        of Service</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    <a href="src/assets/facebook.svg"


                                       className="text-gray-400 hover:text-white transition-colors duration-200"><Facebook
                                        size={24}/></a>
                                    <a href="src/assets/x.svg"
                                       className="text-gray-400 hover:text-white transition-colors duration-200"><Twitter
                                        size={24}/></a>
                                    <a href="src/assets/instagram.svg"
                                       className="text-gray-400 hover:text-white transition-colors duration-200"><Instagram
                                        size={24}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                            &copy; 2024 CamStore. All rights reserved.
                        </div>
                    </div>
                </footer>
            </main>
        </div>

);
};

export default CameraHome;