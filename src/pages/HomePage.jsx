import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRecipes = async (queryparam) => {
    try {
      setLoading(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${queryparam}`);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const suggestRecipe = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching suggestion:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("egg");
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(searchQuery);
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex flex-col p-6 md:p-10">
      <div className="max-w-screen-lg mx-auto w-full">
        {/* 🔍 Search Bar & Suggestion Button */}
        <div className="flex gap-4 items-center">
          <form onSubmit={handleSearchRecipe} className="flex-grow">
            <label className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1e293b] border border-[#38bdf8] shadow-md shadow-cyan-500/30 focus-within:border-cyan-300">
              <Search size={20} className="text-cyan-300" />
              <input
                type="text"
                className="bg-transparent outline-none text-white text-md w-full placeholder-gray-400"
                placeholder="What do you want to cook today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
          </form>

          <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-600 hover:to-blue-800 
                       text-white font-bold px-5 py-2 rounded-lg transition-all shadow-lg 
                       shadow-cyan-400/40 hover:shadow-cyan-500/50 transform hover:scale-105"
            onClick={suggestRecipe}
          >
            🎲 Suggest Me
          </Button>
        </div>

        {/* 🍽️ Section Title */}
        <h1 className="font-extrabold text-4xl md:text-5xl mt-8 text-[#38bdf8]">Recommended Recipes</h1>
        <p className="text-gray-400 text-lg mt-2">🔥 Popular choices for today</p>

        {/* 🟦 Recipes Grid / Skeleton Loading */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {loading
            ? [...Array(9)].map((_, index) => (
                <div key={index} className="flex flex-col gap-3 w-full animate-pulse">
                  <div className="bg-gray-800 h-40 w-full rounded-lg shadow-md"></div>
                  <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
                  <div className="bg-gray-700 h-4 w-1/3 rounded"></div>
                </div>
              ))
            : recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
