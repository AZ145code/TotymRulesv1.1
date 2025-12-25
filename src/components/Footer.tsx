
const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: '#000000ff' }}>
      <div className="mx-auto max-w-6xl">

        {/* Copyright */}
        <div className="mt-10 pt-6 text-center">
          <p className="flex items-center justify-center gap-2" style={{ color: '#ffffffff' }}>
            Made by Ali Zulfikar {new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
