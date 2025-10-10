import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-orange-500 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">About Us</h3>
            <p className="text-sm text-white/90">
              Discover amazing places around the world with our curated travel guides and experiences.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white/80 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white/80 transition-colors">Travel Guide</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; 2025 My Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
