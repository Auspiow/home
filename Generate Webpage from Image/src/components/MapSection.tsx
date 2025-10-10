import { MapPin } from "lucide-react";

const locations = [
  { id: 1, name: "Paris", top: "45%", left: "48%" },
  { id: 2, name: "Tokyo", top: "40%", left: "85%" },
  { id: 3, name: "New York", top: "42%", left: "25%" },
  { id: 4, name: "Sydney", top: "75%", left: "88%" },
  { id: 5, name: "Dubai", top: "50%", left: "60%" },
  { id: 6, name: "London", top: "40%", left: "47%" },
  { id: 7, name: "Barcelona", top: "48%", left: "48%" },
  { id: 8, name: "Rome", top: "48%", left: "50%" },
];

export function MapSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">World's Best Places To Visit</h2>
        
        <div className="relative bg-gray-100 rounded-lg overflow-hidden h-[500px]">
          {/* Simple map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
            <svg className="w-full h-full opacity-20" viewBox="0 0 1000 500">
              {/* Continents outline - simplified */}
              <path
                d="M 100 200 Q 150 180 200 200 T 300 220 L 350 250 L 320 280 L 280 270 L 250 250 Z"
                fill="#94a3b8"
              />
              <path
                d="M 400 150 Q 450 140 500 160 T 600 180 L 650 200 L 620 230 L 580 220 L 550 200 Z"
                fill="#94a3b8"
              />
              <path
                d="M 700 180 Q 750 170 800 190 T 900 210 L 920 240 L 880 260 L 840 250 L 810 230 Z"
                fill="#94a3b8"
              />
              <path
                d="M 150 350 Q 200 330 250 350 T 350 370 L 380 400 L 340 420 L 300 410 L 270 390 Z"
                fill="#94a3b8"
              />
            </svg>
          </div>
          
          {/* Location pins */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
              style={{ top: location.top, left: location.left }}
            >
              <div className="relative">
                <MapPin className="w-8 h-8 text-pink-500 fill-pink-500 animate-bounce" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <span className="text-sm">{location.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
