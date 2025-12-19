import { Mail, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative px-6 py-12 md:px-12 lg:px-20 border-t-4 border-foreground/10 bg-cozy-cream">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-3xl font-extrabold text-foreground">
              Ali Zulfikar 🌸
            </h3>
            <p className="mt-2 text-muted-foreground font-medium">
              Graphic Designer & Illustrator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:alizulfikar@email.com" 
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cozy-peach text-foreground border-4 border-foreground/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cozy-lavender text-foreground border-4 border-foreground/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cozy-sky text-foreground border-4 border-foreground/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t-4 border-foreground/10 text-center">
          <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
            Made with <Heart className="w-5 h-5 fill-primary text-primary animate-bounce-soft" /> © {new Date().getFullYear()} Ali Zulfikar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
