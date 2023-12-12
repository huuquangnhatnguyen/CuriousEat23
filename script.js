document.addEventListener('DOMContentLoaded', function() {
    const ingredientInput = document.getElementById('ingredient-input');
    const generateButton = document.getElementById('generate-button');
    const recipeList = document.getElementById('recipe-list');

    generateButton.addEventListener('click', function() {
        const ingredients = ingredientInput.value.trim();
        if (ingredients) {
            // In a real implementation, you would make an AJAX request to your backend here to fetch recipes.
            // For now, let's display a sample recipe.
            const recipe = `Sample Recipe for ${ingredients}`;
            const listItem = document.createElement('li');
            listItem.textContent = recipe;
            recipeList.appendChild(listItem);
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const ingredientList = document.getElementById('ingredient-list');
    const ingredientInput = document.getElementById('ingredient-input');
    const generateButton = document.getElementById('generate-button');

    ingredientList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            const selectedIngredient = event.target.textContent;
            ingredientInput.value += `${selectedIngredient}, `;
        }
    });

    generateButton.addEventListener('click', function() {
        const ingredients = ingredientInput.value.trim();
        if (ingredients) {
            // In a real implementation, you would make an AJAX request to your backend here to fetch recipes.
            // For now, let's display a sample recipe.
            const recipe = `Sample Recipe for ${ingredients}`;
            const listItem = document.createElement('li');
            listItem.textContent = recipe;
            recipeList.appendChild(listItem);
        }
    });
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

