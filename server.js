const express = require('express');
const fs = require('fs').promises; // File system module
const path = require('path'); // Path module
const app = express();
const PORT = 3000;

let recipes = [];

// Read recipes from the JSON file on server start
async function readRecipesFromFile() {
    try {
        const data = await fs.readFile('./recipes.json', 'utf8');
        recipes = JSON.parse(data);
    } catch (error) {
        console.error('Error reading recipes from file:', error);
    }
}

// API endpoint to get recipes
app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, async () => {
    await readRecipesFromFile();
    console.log(`Server is running on http://localhost:${PORT}`);
});
