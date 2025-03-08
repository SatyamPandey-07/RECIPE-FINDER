import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import RecipeDetails from "./components/ui/RecipeDetails";
import SignUpPage from "./pages/SignupPage";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* 🚀 Sidebar Navigation */}
      <Sidebar />

      {/* 🌟 Main Content Area */}
      <div className="flex-1 p-6 md:p-10 lg:p-12 transition-all duration-300 ease-in-out">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourite" element={<FavouritePage />} /> {/* ✅ Fixed Path */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
