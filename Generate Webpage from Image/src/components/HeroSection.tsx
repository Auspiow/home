import { Search } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center bg-cover bg-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466500419182-8602dc906b51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc2MDAwMzAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl mb-6">Where will you go next?</h1>
        <p className="text-xl mb-8 text-gray-200">Discover amazing places around the world</p>
        
        <div className="flex items-center bg-white rounded-lg overflow-hidden max-w-xl mx-auto shadow-lg">
          <input
            type="text"
            placeholder="Search destinations, activities..."
            className="flex-1 px-6 py-4 outline-none text-gray-800"
          />
          <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 h-auto rounded-none">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
