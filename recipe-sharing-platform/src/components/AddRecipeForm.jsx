import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) {
      formErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      formErrors.ingredients = "Please provide the ingredients.";
    } else {
      const items = ingredients.split(",").map((i) => i.trim());
      if (items.length < 2) {
        formErrors.ingredients = "Please enter at least 2 ingredients.";
      }
    }

    if (!steps.trim()) {
      formErrors.steps = "Preparation steps are required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps,
    };

    console.log("New Recipe:", newRecipe);
    alert("Recipe added successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium mb-2 text-sm md:text-base">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-2 text-sm md:text-base">
              Ingredients (comma separated)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="e.g. Eggs, Flour, Sugar"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block font-medium mb-2 text-sm md:text-base">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="6"
              placeholder="Describe the preparation process..."
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
