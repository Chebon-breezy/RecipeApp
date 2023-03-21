import React from "react";
import style from "./recipe.module.css"

const Recipes = ({tittle,calories,image,ingredients}) => {
    return(
      <div className={style.recipe}>
        <h1>{tittle}</h1>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img className={style.image} src={image} alt="" />
      </div>
    );
};

export default Recipes;