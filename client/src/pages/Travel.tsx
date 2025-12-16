import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import travelImage from "@assets/generated_images/scenic_mountain_landscape_for_travel_blog.png";

const posts = [
  {
    id: 1,
    title: "Swiss Alps",
    location: "Switzerland",
    image: travelImage, // Using the generated one for now, would typically vary
    desc: "Finding peace in the silence of the mountains."
  },
  {
    id: 2,
    title: "Kyoto Streets",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    desc: "Early mornings in Gion."
  },
  {
    id: 3,
    title: "Icelandic Roads",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800",
    desc: "Chasing waterfalls and northern lights."
  }
];

export default function Travel() {
  return (
    <div className="min-h-screen bg-background bg-grain">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-2xl mx-auto mb-16 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-display font-bold mb-4"
           >
             Wanderlust
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground text-lg"
           >
             A visual journal of places that left a mark.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[4/5]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-80">{post.location}</p>
                  <h3 className="text-xl font-display font-bold">{post.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{post.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
