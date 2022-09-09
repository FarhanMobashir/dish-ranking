import { useEffect, useState } from "react";

export const VotePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h1>Vote</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.dishName}</h2>
            <img src={recipe.image} alt="recipe" />
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
