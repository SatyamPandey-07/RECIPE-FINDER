import React from "react";
import SwiggyButton from "./SwiggyButton";

const InformationCard = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-md w-[400px] h-[500px] p-6 bg-[#0a0f1f] text-white shadow-[0_0_20px_#38bdf8] rounded-2xl border border-[#38bdf8]/50 transition-transform duration-300 hover:scale-[1.02]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#ff6b6b] bg-[#1e293b] rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#ff6b6b]/20"
        >
          ✖
        </button>

        {/* Image Section */}
        <div className="h-1/2 rounded-lg overflow-hidden border border-[#38bdf8]/40 shadow-lg">
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
            <img
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:shadow-[0_0_25px_#38bdf8]"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </a>
        </div>

        {/* Details Section */}
        <div className="h-1/2 p-4 overflow-auto">
          <h2 className="text-2xl font-bold text-[#38bdf8] mb-2 tracking-wide">{recipe.strMeal}</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
            {recipe.strInstructions}
          </p>

          {/* Swiggy Button */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm font-extrabold text-[#facc15] animate-pulse">Too tired to cook?</p>
            <SwiggyButton recipename={recipe.strMeal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
