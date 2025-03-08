import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SwiggyButton from "./SwiggyButton";

const RecipeCard = ({ recipe, bg, onFavoriteUpdate }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFavorite(favourites.some((fav) => fav.idMeal === recipe.idMeal));
  }, [recipe.idMeal]);

  const toggleFavorite = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (isFavorite) {
      favourites = favourites.filter((fav) => fav.idMeal !== recipe.idMeal);
    } else {
      favourites.push(recipe);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
    setIsFavorite(!isFavorite);
    onFavoriteUpdate();
  };

  return (
    <div
      className={`relative flex flex-col rounded-xl ${bg} p-4 border border-[#00eaff]/50
      backdrop-blur-xl bg-[#0f172a]/60 shadow-[0_0_20px_#00eaff] transition-all duration-500 
      hover:scale-105 hover:shadow-[0_0_40px_#00eaff]`}
    >
      {/* 🎥 Image Section */}
      <a
        href={recipe.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-48 rounded-lg overflow-hidden group"
      >
        <img
          src={recipe?.strMealThumb || "default-image.jpg"}
          alt={recipe.strMeal}
          className="w-full h-full object-cover transition-transform duration-700 
          group-hover:scale-110 group-hover:rotate-2"
        />
        {/* ❤️ Favorite Button */}
        <div
          className="absolute top-3 right-3 p-2 bg-[#1e293b]/70 rounded-full cursor-pointer
          transition-transform duration-300 hover:scale-125 shadow-[0_0_15px_#ff6b6b]"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite();
          }}
        >
          {isFavorite ? (
            <Heart className="text-red-500 fill-red-500 drop-shadow-[0_0_10px_#ff6b6b]" size={24} />
          ) : (
            <Heart className="text-gray-300 hover:text-red-500 transition-colors duration-300" size={24} />
          )}
        </div>
      </a>

      {/* 🍽️ Title */}
      <h3 className="mt-4 text-xl font-bold text-[#00eaff] tracking-wider text-center">
        {recipe?.strMeal}
      </h3>

      {/* 🔍 More Info Button */}
      <button
        onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
        className="mt-5 bg-[#00eaff] hover:bg-[#0ea5e9] text-black font-bold py-3 px-6 
        rounded-lg shadow-[0_0_15px_#00eaff] transition-all duration-500 hover:shadow-[0_0_30px_#00eaff] 
        hover:scale-[1.1] active:scale-95"
      >
        More Info
      </button>

      {/* 🚀 Swiggy Button */}
      <div className="mt-4 flex justify-center">
        <SwiggyButton recipename={recipe.strMeal} />
      </div>
    </div>
  );
};

export default RecipeCard;
