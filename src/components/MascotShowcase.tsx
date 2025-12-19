import mascot1 from "@/assets/mascot-1.png";
import mascot2 from "@/assets/mascot-2.png";
import mascot3 from "@/assets/mascot-3.png";
import mascot4 from "@/assets/mascot-4.png";
const mascots = [{
  name: "Bunny",
  image: mascot1,
  personality: "Friendly helper",
  color: "bg-cozy-peach"
}, {
  name: "Neko",
  image: mascot2,
  personality: "Playful & curious",
  color: "bg-cozy-lavender"
}, {
  name: "Dragon",
  image: mascot3,
  personality: "Cheerful buddy",
  color: "bg-cozy-mint"
}, {
  name: "Bear",
  image: mascot4,
  personality: "Cozy explorer",
  color: "bg-cozy-cream"
}];
const MascotShowcase = () => {
  return <section className="relative px-6 md:px-12 lg:px-20 overflow-hidden py-0">
      {/* Decorative Shapes */}
      
      

      <div className="relative mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          
          
        </div>

        {/* Mascot Grid */}
        
      </div>
    </section>;
};
export default MascotShowcase;