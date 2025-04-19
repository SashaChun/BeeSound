const Footer = () => {
    return (
        <footer className="bg-[#F5F7FF] mt-20 py-12 px-6 sm:px-12">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                 <div>
                    <h1 className="text-xl font-semibold mb-2">🎵 BeeSound</h1>
                    <p className="text-sm text-gray-700">
                        BeeSound is the one of the world's largest online shops that providing over 1500 headphones for its customers from over 80 countries
                    </p>
                    <div className="flex space-x-3 mt-5">
                        <button className="w-[35px] h-[35px] bg-[#E8E8E8] rounded-full flex items-center justify-center text-black hover:bg-[#d5d5d5] transition">
                            <i className="fa-brands fa-instagram"></i>
                        </button>
                        <button className="w-[35px] h-[35px] bg-[#E8E8E8] rounded-full flex items-center justify-center text-black hover:bg-[#d5d5d5] transition">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </button>
                        <button className="w-[35px] h-[35px] bg-[#E8E8E8] rounded-full flex items-center justify-center text-black hover:bg-[#d5d5d5] transition">
                            <i className="fa-brands fa-telegram"></i>
                        </button>
                        <button className="w-[35px] h-[35px] bg-[#E8E8E8] rounded-full flex items-center justify-center text-black hover:bg-[#d5d5d5] transition">
                            <i className="fa-brands fa-whatsapp"></i>
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Site Map</h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>FAQ’s</li>
                        <li>Customers Services</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Products</h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                        <li>Headphones</li>
                        <li>Speakers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscription</h3>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-2 rounded-md bg-[#E8E8E8] placeholder-gray-500 text-sm mb-3"
                    />
                    <button className="w-full px-4 py-2 bg-[#1C2340] text-white rounded-md text-sm hover:bg-[#101728] transition">
                        Submit Your Email
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
