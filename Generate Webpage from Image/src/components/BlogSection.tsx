import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MessageCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Amazing Places to Visit in Europe",
    excerpt: "Discover the most beautiful destinations across Europe...",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbHxlbnwxfHx8fDE3NjAwOTcwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Oct 5, 2025",
    comments: 24
  },
  {
    id: 2,
    title: "Hidden Gems in Southeast Asia",
    excerpt: "Explore off-the-beaten-path destinations in Asia...",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzYwMDUyODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Oct 8, 2025",
    comments: 18
  },
  {
    id: 3,
    title: "Adventure Travel Guide 2026",
    excerpt: "Get ready for the ultimate adventure experiences...",
    image: "https://images.unsplash.com/photo-1642777793779-0e67e065f79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWxlciUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjAwOTcwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Oct 10, 2025",
    comments: 32
  }
];

const popularPosts = [
  { id: 1, title: "Best Travel Apps for 2026", views: "12K" },
  { id: 2, title: "Budget Travel Tips", views: "9.5K" },
  { id: 3, title: "Solo Travel Safety Guide", views: "8.2K" },
  { id: 4, title: "Photography Tips for Travelers", views: "7.8K" }
];

export function BlogSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">My Latest Blog</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-48 md:h-auto">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex items-center gap-3 pb-3 border-b border-gray-200 last:border-0">
                    <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500">{post.id}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm hover:text-orange-500 cursor-pointer transition-colors">{post.title}</p>
                      <span className="text-xs text-gray-500">{post.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-orange-500 text-white rounded-lg shadow-md p-6">
              <h3 className="mb-4">Subscribe to Newsletter</h3>
              <p className="text-sm mb-4">Get the latest travel tips and deals directly to your inbox!</p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white text-gray-800 border-0"
                />
                <Button className="w-full bg-white text-orange-500 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
