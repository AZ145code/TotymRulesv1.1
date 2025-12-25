import Banner from "@/assets/Banner.png";
import Title1 from "@/assets/Title1.png";
import temple from "@/assets/temple.png";
import ruin from "@/assets/ruin.png";
import chapel from "@/assets/chapel.png";
import Creature from "@/assets/Creature.png";
import Worship from "@/assets/Worship.png";
import Tarot from "@/assets/Tarot.png";
import Imposter from "@/assets/Imposter.png";
import Relic from "@/assets/Relic.png";
import Winning from "@/assets/winning.png";
import Howto from "@/assets/Howtoplay.png";
import { CometCard } from "@/components/ui/comet-card";

const BentoSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12" style={{ backgroundColor: '#ffffffff' }}>
      <div className="mx-auto max-w-7xl p-6 rounded-3xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)' }}>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
          {/* Profile Card */}
          <div className="col-span-4 md:col-span-12 lg:col-span-12 rounded-3xl overflow-hidden " style={{}}>
            <div className="w-full h-full">
              <img 
                src={Banner} 
                alt="Ali Zulfikar avatar" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Description */}
          <div className="col-span-4 md:col-span-4 lg:col-span-12 rounded-3xl p-6  text-center grid grid-cols-1 lg:grid-cols-12 gap-4" style={{ backgroundColor: '#00000025' }}>
            <div className="col-span-4 md:col-span-4 lg:col-span-12 flex flex-wrap items-end gap-3 items-center justify-center text-center ">
              <img 
                src={Title1}  
                className="w-25 h-25" 
              />
            </div>
            <div className=" col-span-4 md:col-span-4 lg:col-span-12 flex flex-wrap items-end gap-3 items-center text-center justify-center mb-4">
              <h3 className="text-l md:text-2xl lg:text-4xl font-black"style={{ color: '#000000ff'}}>
                SUMMARY OF TOTYM RULES 
              </h3>
            </div>
            
            
            <p className=" col-span-4 md:col-span-4 lg:col-span-12 mt-3 leading-relaxed text-sm md:text-base lg:text-1xl font-medium" style={{ color: '#000000ff' }}>
                  In TOTYM, each player controls a single active creature at a time. On your turn, you draw from your Temple, and build totems on either side of your creature with a combination of tarot cards that create effects or disrupt opponents, and worship cards, which are played face-down. Worship cards may be real or bluffed, and opponents can challenge a completed totem by playing an Imposter card if they believe it is built on false worship.

When a totem meets its worship requirements and is successfully locked, it brings the creature closer to ascension. Once both sides of a creature are locked, the creature ascends and scores a point.

Players must balance deception, timing, and disruption while preventing opponents from completing their own totems. The game continues until a player ascends three creatures or until all other players are eliminated.
            </p>
            <div className="col-span-4 md:col-span-4 lg:col-span-12 flex flex-wrap items-end gap-3 items-center justify-center text-center ">
              <img 
                src={Howto}  
                className="w-25 h-full" 
              />
            </div>
            
            
            <div className="bg-gradient-to-b from-[#362e6e] to-[#000000] col-span-4 md:col-span-4 lg:col-span-6 rounded-3xl p-6 transition-all duration-100 hover:shadow-xl hover:rotate-1 hover:-translate-y-2 hover:brightness-110" style={{ backgroundColor: '#ffffffff' }}>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#e4cd4fff' }}>
                  Win Conditions
                </h3>
                <p className="mb-6" style={{ color: '#ffffffff' }}>
                  A player wins the game immediately if they ascend three creatures.

    Alternatively, a player wins if all other players have been eliminated. A player who is forced to draw cards but cannot is immediately eliminated from the game.
                </p>
                <img 
                      src={Winning}  
                      className="w-25 h-25" 
                    />
            </div>

            
            <div className="col-span-4 md:col-span-4 lg:col-span-6 rounded-3xl p-6 transition-all duration-100 hover:shadow-xl hover:rotate-1 hover:-translate-y-2" style={{ backgroundColor: '#ffffffff' }}>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#000000ff' }}>
                  Core Terminology
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                  {/* Temple */}
                  <div
                    className="rounded-2xl px-5 py-4 flex flex-col items-center gap-1 text-center w-full"
                    style={{ backgroundColor: '#00000021' }}
                  >
                    <img 
                      src={temple}  
                      className="w-25 h-25" 
                    />
                    <span className="font-bold" style={{ color: '#000000ff' }}>
                      Temple
                    </span>
                    <span className="text-xs font-medium opacity-70" style={{ color: '#000000ff' }}>
                      Your draw pile.
                    </span>
                  </div>

                  {/* Ruins */}
                  <div
                    className="rounded-2xl px-5 py-4 flex flex-col items-center gap-1 text-center w-full"
                    style={{ backgroundColor: '#00000021' }}
                  >
                    <img 
                      src={ruin}  
                      className="w-25 h-25" 
                    />
                    <span className="font-bold" style={{ color: '#000000ff' }}>
                      Ruins
                    </span>
                    <span className="text-xs font-medium opacity-70" style={{ color: '#1E1E1C' }}>
                      Your discard pile.
                    </span>
                  </div>

                  {/* Chapel */}
                  <div
                    className="md:col-span-1 rounded-2xl px-5 py-4 flex flex-col items-center gap-1 text-center w-full"
                    style={{ backgroundColor: '#00000021' }}
                  >
                    <img 
                      src={chapel}  
                      className="w-25 h-25" 
                    />
                    <span className="font-bold" style={{ color: '#000000ff' }}>
                      Chapel
                    </span>
                    <span className="text-xs font-medium opacity-70" style={{ color: '#1E1E1C' }}>
                      Your inactive creature pile.
                    </span>
                  </div>
                </div>
            </div> 


            <div className="col-span-4 md:col-span-4 lg:col-span-12 rounded-3xl p-6 " style={{ backgroundColor: '#ffffffff' }}>
                <h3 className="text-4xl font-bold mb-4" style={{ color: '#1E1E1C' }}>
                  CARD TYPES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
                
                  <div className="md:col-span-1 rounded-2xl px-5 py-10 flex flex-col items-center place-items-center gap-6 h-[500px]" style={{ backgroundColor: "#00000021" }}>
                    {/* LEFT — CARD */}
                    <CometCard className="w-[200px]" translateDepth={16} rotateDepth={16}>
                      <div className="relative aspect-[2.5/3.5] w-full overflow-hidden rounded-2xl">
                        <img
                          src={Creature}
                          alt="Creature"
                          className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            saturate-70
                            contrast-70
                          "
                        />
                      </div>
                    </CometCard>

                    {/* RIGHT — TEXT */}
                    <div className="flex flex-col gap-1 text-left">
                      <span className="font-bold text-base text-black">
                        Creature Cards
                      </span>
                      <span className="text-xs font-medium opacity-70 text-[#1E1E1C]">
                        Creatures have their own worship requirements, blessings, and immunities. Creatures are ascended during the game to score points.
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-1 rounded-2xl px-5 py-10 flex flex-col items-center place-items-center gap-6 h-[500px]" style={{ backgroundColor: "#00000021" }}>
                    {/* LEFT — CARD */}
                    <CometCard className="w-[200px]" translateDepth={16} rotateDepth={16}>
                      <div className="relative aspect-[2.5/3.5] w-full overflow-hidden rounded-2xl">
                        <img
                          src={Worship}
                          alt="Worship"
                          className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            saturate-70
                            contrast-70
                          "
                        />
                      </div>
                    </CometCard>

                    {/* RIGHT — TEXT */}
                    <div className="flex flex-col gap-1 text-left">
                      <span className="font-bold text-base text-black">
                        Worship Cards
                      </span>
                      <span className="text-xs font-medium opacity-70 text-[#1E1E1C]">
                        Worship cards are placed into totems to meet a creature’s worship requirement.
                      </span>
                    </div>
                  </div>
                  <div className=" md:col-span-1 rounded-2xl px-5 py-10 flex flex-col items-center place-items-center gap-6 h-[500px]" style={{ backgroundColor: "#00000021" }}>
                    {/* LEFT — CARD */}
                    <CometCard className="w-[200px]" translateDepth={16} rotateDepth={16}>
                      <div className="relative aspect-[2.5/3.5] w-full overflow-hidden rounded-2xl">
                        <img
                          src={Tarot}
                          alt="Tarot"
                          className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            saturate-70
                            contrast-70
                          "
                        />
                      </div>
                    </CometCard>

                    {/* RIGHT — TEXT */}
                    <div className="flex flex-col gap-1 text-left">
                      <span className="font-bold text-base text-black">
                        Tarot
                      </span>
                      <span className="text-xs font-medium opacity-70 text-[#1E1E1C]">
                        Tarot cards create effects, actions, and disruptions. Tarot cards include Major Arcana (non-suits) and Minor Arcana (suits).
                      </span>
                    </div>
                  </div>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-20 gap-5 place-items-center">
                
                  <div className="md:col-span-1 rounded-2xl px-5 py-10 flex flex-col items-center place-items-center gap-6 h-[500px]" style={{ backgroundColor: "#00000021" }}>
                    {/* LEFT — CARD */}
                    <CometCard className="w-[200px]" translateDepth={16} rotateDepth={16}>
                      <div className="relative aspect-[2.5/3.5] w-full overflow-hidden rounded-2xl">
                        <img
                          src={Imposter}
                          alt="Imposter"
                          className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            saturate-70
                            contrast-70
                          "
                        />
                      </div>
                    </CometCard>

                    {/* RIGHT — TEXT */}
                    <div className="flex flex-col gap-1 text-left">
                      <span className="font-bold text-base text-black">
                        Impostor Cards
                      </span>
                      <span className="text-xs font-medium opacity-70 text-[#1E1E1C]">
                        Imposter cards are used to challenge locked totems when you feel an opponent is bluffing.
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-1 rounded-2xl px-5 py-10 flex flex-col items-center place-items-center gap-6 h-[500px]" style={{ backgroundColor: "#00000021" }}>
                    {/* LEFT — CARD */}
                    <CometCard className="w-[200px]" translateDepth={16} rotateDepth={16}>
                      <div className="relative aspect-[2.5/3.5] w-full overflow-hidden rounded-2xl">
                        <img
                          src={Relic}
                          alt="Relic"
                          className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            saturate-70
                            contrast-70
                          "
                        />
                      </div>
                    </CometCard>

                    {/* RIGHT — TEXT */}
                    <div className="flex flex-col gap-1 text-left">
                      <span className="font-bold text-base text-black">
                        Relic Cards
                      </span>
                      <span className="text-xs font-medium opacity-70 text-[#1E1E1C]">
                        Relic cards are promotional and collectible cards that are primarily collected outside of booster packs and starter decks. These can optionally be used in place of imposter cards.
                      </span>
                    </div>
                  </div>


                </div>
                
                    
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoSection;
