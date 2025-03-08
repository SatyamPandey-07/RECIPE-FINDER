import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  // ✅ Load favorites on component mount
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavorites(favs);
  }, []);

  // ✅ Function to update favorites dynamically
  const updateFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem("favourites")) || []);
  };

  return (
    <div className="bg-[#0f172a] flex-1 p-10 min-h-screen text-[#38bdf8]">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        {favorites.length === 0 ? (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" className="h-3/4" alt="No Favorites Found" />
            <p className="text-lg text-[#94a3b8]">No favorites yet. Start adding some!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.strMeal} recipe={recipe} onFavoriteUpdate={updateFavorites} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
