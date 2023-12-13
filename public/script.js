document.addEventListener('DOMContentLoaded', function() {
    const ingredientInput = document.getElementById('ingredient-input');

    const generateButton = document.getElementById('generate-button');

    const recipeList = document.getElementById('recipe-list');

    const ingredientList = document.getElementById('ingredient-list');

    ingredientList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            const selectedIngredient = event.target.textContent;
            ingredientInput.value += `${selectedIngredient},`;
        }
    });

    generateButton.addEventListener('click', function() {
        recipeList.innerHTML = '';
        const ingredients = ingredientInput.value.trim();
        if (ingredients) {
        
            // Fetch all recipes from the backend API
            fetchRecipes().then(allRecipes => {
                // Get the ingredients entered by the user
                const chosenIngredients = ingredientInput.value
                    .split(',')
                    .map(ingredient => ingredient.trim());

                // Filter recipes based on chosen ingredients
                const matchedRecipes = allRecipes.filter(recipe =>
                    chosenIngredients.every(ingredient =>
                        recipe.ingredients.includes(ingredient)
                    )
                );

                // Display the matched recipes
                displayRecipes(matchedRecipes);
            });
        };
    });

    async function fetchRecipes() {
        try {
            const response = await fetch('/api/recipes');
    
            // Log the status code
            console.log('HTTP Status Code:', response.status);
    
            if (!response.ok) {
                // Log the error message
                const errorMessage = await response.text();
                console.error('Error fetching recipes:', errorMessage);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const recipes = await response.json();
            return recipes;
        } catch (error) {
            console.error('Error fetching recipes:', error);
            return [];
        }
    }

    function displayRecipes(recipes) {
        // Display the fetched recipes
        recipes.forEach(function(recipe) {
            const listItem = document.createElement('li');
            listItem.textContent = recipe.name;
            recipeList.appendChild(listItem);
        });
    }

    function getRandomRecipe(recipes) {
        // Pick a random index
        const randomIndex = Math.floor(Math.random() * recipes.length);
        return recipes[randomIndex];
    }

    
});


document.addEventListener('DOMContentLoaded', function() {
    const ingredientCategories = document.getElementById('ingredient-categories');
    const ingredientList = document.getElementById('ingredient-list');

    ingredientCategories.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            const category = event.target.getAttribute('href').substring(1);
            const categoryDiv = document.getElementById(category);

            // Hide all categories
            const categories = ingredientList.getElementsByClassName('ingredient-category');
            for (const cat of categories) {
                cat.style.display = 'none';
            }

            // Show the selected category
            if (categoryDiv) {
                categoryDiv.style.display = 'block';
            }
        }
    });
});

