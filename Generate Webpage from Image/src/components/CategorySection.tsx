import { Palmtree, Mountain, Waves, Trees, Building2, Sun } from "lucide-react";

const categories = [
  { icon: Palmtree, name: "Beach", color: "from-blue-400 to-blue-600" },
  { icon: Mountain, name: "Mountain", color: "from-gray-400 to-gray-600" },
  { icon: Waves, name: "Water", color: "from-cyan-400 to-cyan-600" },
  { icon: Sun, name: "Desert", color: "from-orange-400 to-orange-600" },
  { icon: Trees, name: "Forest", color: "from-green-400 to-green-600" },
  { icon: Building2, name: "City", color: "from-purple-400 to-purple-600" },
];

export function CategorySection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Choose a Category</h2>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="p-2 hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <span className="text-white text-xl">←</span>
            </div>
          </button>
          
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <category.icon className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm text-gray-700">{category.name}</span>
            </div>
          ))}
          
          <button className="p-2 hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <span className="text-white text-xl">→</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
