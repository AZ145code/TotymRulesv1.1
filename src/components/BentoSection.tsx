import avatar from "@/assets/avatar.png";
import projectLogo from "@/assets/project-logo.jpg";
import projectMascot from "@/assets/project-mascot.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import mascot1 from "@/assets/mascot-1.png";
import mascot2 from "@/assets/mascot-2.png";
import mascot3 from "@/assets/mascot-3.png";
import mascot4 from "@/assets/mascot-4.png";
import { Sparkles, Heart, Star, Palette, PenTool, Layers } from "lucide-react";

const BentoSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
          
          {/* Profile Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={avatar} 
                  alt="Ali Zulfikar avatar" 
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain" 
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Hey! 👋
                </h2>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-400 mt-2">
                  I'm Ali Zulfikar
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed text-sm md:text-base">
                  Graphic designer & illustrator since 2019. Creating cool characters, mascots, and cartoon-style visuals! ⚡
                </p>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6">
            <h3 className="text-3xl font-bold text-white mb-5">
              Skills ⚡
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="w-3 h-3 rounded-full bg-teal-400" />
                <span>Graphic Designer</span>
              </li>
              <li className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="w-3 h-3 rounded-full bg-teal-400" />
                <span>Illustrator</span>
              </li>
              <li className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="w-3 h-3 rounded-full bg-teal-400" />
                <span>Mascot Design</span>
              </li>
              <li className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="w-3 h-3 rounded-full bg-teal-400" />
                <span>Cute / Cartoon Style</span>
              </li>
              <li className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="w-3 h-3 rounded-full bg-teal-400" />
                <span>Logo Design</span>
              </li>
            </ul>
          </div>

          {/* Project 1 */}
          <div className="md:col-span-2 lg:col-span-2 bg-slate-800 rounded-3xl border-2 border-teal-500/30 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={projectLogo} alt="Logo Design" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">Logo Design</h3>
              <p className="text-sm text-slate-400 mt-1">Brand identities & visual marks</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="md:col-span-2 lg:col-span-2 bg-slate-800 rounded-3xl border-2 border-teal-500/30 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={projectMascot} alt="Mascot Maker" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">Mascot Maker</h3>
              <p className="text-sm text-slate-400 mt-1">Character creation & design</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="md:col-span-2 lg:col-span-2 bg-slate-800 rounded-3xl border-2 border-teal-500/30 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={projectIllustration} alt="Illustration" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">Illustration</h3>
              <p className="text-sm text-slate-400 mt-1">Digital art & visual stories</p>
            </div>
          </div>

          {/* Mascots Section */}
          <div className="md:col-span-4 lg:col-span-6 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              My Mascots 🎨
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-teal-900/50 rounded-2xl p-4 text-center border border-teal-500/20">
                <img src={mascot1} alt="Bunny" className="w-full aspect-square object-contain rounded-xl mb-3" />
                <h4 className="text-lg font-bold text-white">Bunny</h4>
                <p className="text-sm text-slate-400">Friendly helper</p>
              </div>
              <div className="bg-purple-900/50 rounded-2xl p-4 text-center border border-purple-500/20">
                <img src={mascot2} alt="Neko" className="w-full aspect-square object-contain rounded-xl mb-3" />
                <h4 className="text-lg font-bold text-white">Neko</h4>
                <p className="text-sm text-slate-400">Playful & curious</p>
              </div>
              <div className="bg-blue-900/50 rounded-2xl p-4 text-center border border-blue-500/20">
                <img src={mascot3} alt="Dragon" className="w-full aspect-square object-contain rounded-xl mb-3" />
                <h4 className="text-lg font-bold text-white">Dragon</h4>
                <p className="text-sm text-slate-400">Cheerful buddy</p>
              </div>
              <div className="bg-amber-900/50 rounded-2xl p-4 text-center border border-amber-500/20">
                <img src={mascot4} alt="Bear" className="w-full aspect-square object-contain rounded-xl mb-3" />
                <h4 className="text-lg font-bold text-white">Bear</h4>
                <p className="text-sm text-slate-400">Cozy explorer</p>
              </div>
            </div>
          </div>

          {/* Philosophy 1 */}
          <div className="md:col-span-2 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-900/50 border border-teal-500/30">
              <Sparkles className="h-8 w-8 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cute & Memorable</h3>
            <p className="text-slate-400 text-sm">Adorable characters with strong personalities</p>
          </div>

          {/* Philosophy 2 */}
          <div className="md:col-span-2 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-900/50 border border-purple-500/30">
              <Heart className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Design With Heart</h3>
            <p className="text-slate-400 text-sm">Every creation connects emotionally</p>
          </div>

          {/* Philosophy 3 */}
          <div className="md:col-span-2 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-900/50 border border-amber-500/30">
              <Star className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Warm & Playful</h3>
            <p className="text-slate-400 text-sm">Friendly designs full of personality</p>
          </div>

          {/* Software Tools */}
          <div className="md:col-span-4 lg:col-span-3 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Tools I Use 🛠️
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-teal-900/50 rounded-2xl px-5 py-4 flex items-center gap-3 border border-teal-500/20">
                <PenTool className="h-6 w-6 text-teal-400" />
                <span className="font-bold text-white">Adobe Illustrator</span>
              </div>
              <div className="bg-blue-900/50 rounded-2xl px-5 py-4 flex items-center gap-3 border border-blue-500/20">
                <Layers className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-white">Adobe Photoshop</span>
              </div>
              <div className="bg-purple-900/50 rounded-2xl px-5 py-4 flex items-center gap-3 border border-purple-500/20">
                <Palette className="h-6 w-6 text-purple-400" />
                <span className="font-bold text-white">Procreate</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="md:col-span-4 lg:col-span-3 bg-slate-800 rounded-3xl border-2 border-teal-500/30 p-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Connect! 💬
            </h3>
            <p className="text-slate-400 mb-6">
              Have a project in mind? I'd love to hear from you!
            </p>
            <a 
              href="mailto:alizulfikar@email.com" 
              className="inline-flex items-center gap-2 bg-teal-500 text-slate-900 font-bold px-8 py-4 rounded-2xl hover:bg-teal-400 transition-colors"
            >
              📧 Send Me an Email
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoSection;
