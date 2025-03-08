import { Home, Heart, KeyRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  const location = useLocation();

  return (
    <div
      className="p-5 md:p-10 border-r border-[#00eaff]/50 min-h-screen w-24 md:w-64 hidden sm:block 
      bg-[#0f172a]/80 backdrop-blur-lg shadow-[0_0_25px_#00eaff] transition-all duration-300"
    >
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        {/* Logo */}
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" className="hidden md:block w-28 drop-shadow-[0_0_15px_#00eaff]" />
          <img src={logo} alt="logo" className="block md:hidden w-10 drop-shadow-[0_0_10px_#00eaff]" />
        </div>

        {/* Navigation */}
        <ul className="flex flex-col items-center md:items-start gap-10">
          <SidebarItem to="/" icon={<Home size={26} />} label="Home" active={location.pathname === "/"} />
          <SidebarItem
            to="/favourite"
            icon={<Heart size={26} />}
            label="Favorites"
            active={location.pathname === "/favourite"}
          />
          <SidebarItem
            to="/signup"
            icon={<KeyRound size={26} />}
            label="Sign Up"
            active={location.pathname === "/signup"}
          />
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, label, active }) => {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center gap-3 text-lg font-semibold transition-all hover:scale-110 
        ${active ? "text-[#00eaff] drop-shadow-[0_0_15px_#00eaff]" : "text-gray-400 hover:text-[#00eaff]"} `}
      >
        {icon}
        <span className="hidden md:block">{label}</span>
      </Link>
    </li>
  );
};

const MobileSidebar = () => {
  const location = useLocation();

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-lg border-t border-[#00eaff]/50 z-10 
      p-4 sm:hidden flex justify-center gap-12 shadow-[0_0_20px_#00eaff] transition-all duration-300"
    >
      <MobileNavItem to="/" icon={<Home size={28} />} active={location.pathname === "/"} />
      <MobileNavItem to="/favourite" icon={<Heart size={28} />} active={location.pathname === "/favourite"} />
      <MobileNavItem to="/signup" icon={<KeyRound size={28} />} active={location.pathname === "/signup"} />
    </div>
  );
};

const MobileNavItem = ({ to, icon, active }) => {
  return (
    <Link
      to={to}
      className={`p-2 transition-all hover:scale-110 ${
        active ? "text-[#00eaff] drop-shadow-[0_0_15px_#00eaff]" : "text-gray-400 hover:text-[#00eaff]"
      }`}
    >
      {icon}
    </Link>
  );
};
