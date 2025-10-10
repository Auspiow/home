import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="relative py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlfGVufDF8fHx8MTc2MDAyODAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl mb-4">Helps you Travel The Globe Travelling</h2>
        <p className="text-xl mb-8 text-gray-200">
          Experience the world through our curated travel videos
        </p>
        
        <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto hover:bg-orange-500 hover:text-white transition-colors group shadow-lg">
          <Play className="w-10 h-10 text-orange-500 group-hover:text-white fill-current ml-1" />
        </button>
        
        <p className="mt-6 text-lg">Watch Video</p>
      </div>
    </section>
  );
}
