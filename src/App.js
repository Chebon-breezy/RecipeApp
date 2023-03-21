import React, { useEffect, useState} from "react"; 
import Recipes from "./Recipes";
import './App.css';

const App = () =>{

   const APP_ID = 'd13de0fc';
   const APP_KEY = '86d12d6a92828c68d4ad5b06f57f7cc5'; 

   const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState ([]);
   const [query, setQuery] = useState ('chicken');
   
  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  

  const updatesearch = e => {
    setSearch(e.target.value);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }; 


  return(
   <div className="App">

    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="Text" value={search} onChange={updatesearch} />
      <button className="search-button" type="submit">search
      </button>
    </form>

    <div className="recipes">
    {recipes.map(recipes =>(
     <Recipes 
     
     key={recipes.recipe.label}
     tittle={recipes.recipe.label} 
     calories={recipes.recipe.calories}
     image={recipes.recipe.image}
     ingredients={recipes.recipe.ingredients}
     />  

    ))};
    </div>
   </div>
  );
};

export default App;
