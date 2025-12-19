import { Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative px-6 py-16 md:px-12 lg:px-20 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-4xl text-foreground">
              ALI ZULFIKAR
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Graphic Designer & Illustrator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ali Zulfikar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
