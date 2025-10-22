import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 p-6">
      <img 
        src={logo} 
        alt="RVMCUSTOMIZER Logo" 
        className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
      />
    </header>
  );
};

export default Header;
