import React from "react";

const SwiggyButton = ({ recipename, isSticky = false }) => {
  const swiggyUrl = `https://www.swiggy.com/search?query=${encodeURIComponent(recipename)}`;

  return (
    <a
      href={swiggyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff4757] text-white px-6 py-2 rounded-lg font-semibold tracking-wide 
      shadow-[0_0_12px_#ff6b6b] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#ff4757] 
      active:scale-95 ${isSticky ? "fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10" : ""}`}
    >
      <span className="text-lg">🚀</span> SWIGGY IT!
      {/* Neon Glow Effect */}
      <span className="absolute inset-0 opacity-30 blur-lg bg-[#ff6b6b]"></span>
    </a>
  );
};

export default SwiggyButton;

