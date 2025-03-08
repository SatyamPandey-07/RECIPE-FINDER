import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./button";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setRecipe(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg">Loading recipe details...</p>;
  }

  if (!recipe) {
    return <p className="text-center text-lg text-red-500">Recipe not found!</p>;
  }

  return (
    <div className="bg-background text-foreground min-h-screen p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4 neon-glow">{recipe.strMeal}</h1>
        <p className="text-gray-400 mt-2">{recipe.strCategory} - {recipe.strArea}</p>
        <p className="mt-4 text-lg">{recipe.strInstructions}</p>

        <div className="flex gap-4 mt-6">
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
          >
            Watch Video
          </a>
          <Button
            className="bg-[#1e1e1e] hover:bg-[#292929] text-white shadow-[0_0_12px_#00eaff] 
            transition-all duration-300 hover:shadow-[0_0_20px_#00eaff] px-6 py-2 rounded-lg"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
