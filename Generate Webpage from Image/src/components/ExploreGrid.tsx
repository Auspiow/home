import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Share2, MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const explores = [
  {
    id: 1,
    title: "Beach Paradise",
    location: "Maldives",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1550399504-8953e1a6ac87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2MDA0MTYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$1,299"
  },
  {
    id: 2,
    title: "Mountain Escape",
    location: "Swiss Alps",
    date: "Jan 20, 2026",
    image: "https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZ3xlbnwxfHx8fDE3NjAwNDA0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$1,899"
  },
  {
    id: 3,
    title: "Desert Safari",
    location: "Dubai, UAE",
    date: "Nov 10, 2025",
    image: "https://images.unsplash.com/photo-1617374128851-c84e37dc9f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYwMDUzNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$999"
  }
];

export function ExploreGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2>Explore the World</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {explores.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{item.date}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-orange-500">{item.price}</span>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
