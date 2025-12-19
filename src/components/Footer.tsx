import { Mail, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-12 lg:px-20 border-t-2 border-teal-500/30 bg-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white">
              Ali Zulfikar ⚡
            </h3>
            <p className="mt-2 text-slate-400">
              Graphic Designer & Illustrator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:alizulfikar@email.com" 
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-900/50 text-teal-400 border-2 border-teal-500/30 hover:bg-teal-800/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-900/50 text-purple-400 border-2 border-purple-500/30 hover:bg-purple-800/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900/50 text-blue-400 border-2 border-blue-500/30 hover:bg-blue-800/50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t-2 border-teal-500/20 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-5 h-5 fill-teal-400 text-teal-400" /> © {new Date().getFullYear()} Ali Zulfikar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
