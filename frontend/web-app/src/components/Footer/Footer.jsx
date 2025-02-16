const Footer = () => {
    return (
      <footer className="bg-white text-black py-6 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            
            {/* Column 1 - Brand */}
            <div>
              <h2 className="text-xl font-bold">Adira</h2>
              <p className="text-gray-600 mt-2">Empowering communities through shared experiences.</p>
            </div>
  
            {/* Column 2 - Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>
  
            {/* Column 3 - Social Media */}
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <a href="#" className="hover:text-gray-500">🔵 Facebook</a>
                <a href="#" className="hover:text-gray-500">🐦 Twitter</a>
                <a href="#" className="hover:text-gray-500">📸 Instagram</a>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="text-center text-gray-500 text-sm mt-6 border-t pt-4">
            &copy; {new Date().getFullYear()} Adira. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  