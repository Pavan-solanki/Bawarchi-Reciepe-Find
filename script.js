document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const dishName = document.getElementById('dish-name').value;
    if (dishName) {
        getRecipe(dishName);
    }
});

document.getElementById('dish-type').addEventListener('change', function() {
    populateDishNames(this.value);
});

function populateDishNames(dishType) {
    const southIndianDishes = [
        { name: "Dosa", value: "dosa" },
        { name: "Idli", value: "idli" },
        { name: "Sambar", value: "sambar" },
        { name: "Vada", value: "vada" },
        { name: "Upma", value: "upma" },
        { name: "Pongal", value: "pongal" },
        { name: "Rasam", value: "rasam" }
    ];
    
    const northIndianDishes = [
        { name: "Chole Bhature", value: "chole-bhature" },
        { name: "Palak Paneer", value: "palak-paneer" },
        { name: "Shahi Paneer", value: "shahi-paneer" },
        { name: "Paneer Kofta", value: "paneer-kofta" },
        { name: "Mix Veg", value: "mix-veg" }
    ];
    
    const dishNameSelect = document.getElementById('dish-name');
    dishNameSelect.innerHTML = ''; // Clear existing options

    const dishes = dishType === 'south-indian' ? southIndianDishes : northIndianDishes;

    dishes.forEach(dish => {
        const option = document.createElement('option');
        option.value = dish.value;
        option.textContent = dish.name;
        dishNameSelect.appendChild(option);
    });
}

function getRecipe(dishName) {
    const recipes = {
        "dosa": {
            title: "Dosa",
            ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Salt", "Oil"],
            instructions: [
                "Soak rice, urad dal, and fenugreek seeds separately for 4-6 hours.",
                "Grind them to a fine batter, mix, and ferment overnight.",
                "Heat a griddle, pour a ladle of batter, spread into a thin circle, and cook until crisp.",
                "Serve with chutney and sambar."
            ]
        },
        "idli": {
            title: "Idli",
            ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Salt"],
            instructions: [
                "Soak rice, urad dal, and fenugreek seeds separately for 4-6 hours.",
                "Grind to a fine batter, mix, and ferment overnight.",
                "Pour batter into idli molds and steam for 10-12 minutes.",
                "Serve hot with chutney and sambar."
            ]
        },
        "sambar": {
            title: "Sambar",
            ingredients: ["Toor dal", "Tamarind", "Mixed vegetables", "Sambar powder", "Salt", "Oil", "Mustard seeds", "Curry leaves"],
            instructions: [
                "Cook toor dal until soft.",
                "In a pot, heat oil, add mustard seeds and curry leaves, then add vegetables and sauté.",
                "Add sambar powder, tamarind water, and cooked dal.",
                "Simmer until vegetables are tender.",
                "Serve with rice or idli."
            ]
        },
        "vada": {
            title: "Vada",
            ingredients: ["Urad dal", "Ginger", "Green chilies", "Salt", "Oil"],
            instructions: [
                "Soak urad dal for 4-6 hours.",
                "Grind into a smooth batter with ginger and green chilies.",
                "Add salt and mix well.",
                "Heat oil, shape the batter into small balls or donuts, and deep fry until golden brown.",
                "Serve with chutney and sambar."
            ]
        },
        "upma": {
            title: "Upma",
            ingredients: ["Semolina", "Onion", "Green chilies", "Ginger", "Curry leaves", "Mustard seeds", "Salt", "Oil"],
            instructions: [
                "Roast semolina in a dry pan until slightly golden, set aside.",
                "Heat oil, add mustard seeds, curry leaves, chopped onions, green chilies, and ginger. Sauté until onions are soft.",
                "Add water and salt, bring to a boil.",
                "Gradually add roasted semolina, stirring continuously to avoid lumps.",
                "Cook until semolina absorbs the water and becomes soft.",
                "Serve hot, garnished with fresh coriander."
            ]
        },
        "pongal": {
            title: "Pongal",
            ingredients: ["Rice", "Moong dal", "Ginger", "Pepper", "Cumin", "Cashew nuts", "Ghee", "Salt"],
            instructions: [
                "Dry roast moong dal until aromatic.",
                "Combine rice and moong dal, wash thoroughly, and cook with water until soft.",
                "In a pan, heat ghee, add pepper, cumin, and cashew nuts, sauté until golden.",
                "Add ginger and sauté for a minute.",
                "Pour this tempering over the cooked rice and dal mixture, mix well.",
                "Serve hot with chutney or sambar."
            ]
        },
        "rasam": {
            title: "Rasam",
            ingredients: ["Toor dal", "Tomatoes", "Tamarind", "Garlic", "Black pepper", "Cumin", "Mustard seeds", "Curry leaves", "Coriander"],
            instructions: [
                "Cook toor dal until soft and mash it.",
                "In a pot, heat oil, add mustard seeds, cumin, curry leaves, and crushed garlic. Sauté until fragrant.",
                "Add chopped tomatoes and cook until soft.",
                "Add tamarind water, mashed dal, black pepper, and salt. Simmer for a few minutes.",
                "Garnish with fresh coriander and serve hot with rice."
            ]
        },
        "chole-bhature": {
            title: "Chole Bhature",
            ingredients: ["Chickpeas", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices", "Flour", "Yogurt"],
            instructions: [
                "Cook chickpeas with spices.",
                "In a pan, sauté onions, ginger, and garlic, then add tomatoes and cooked chickpeas.",
                "Simmer until thick.",
                "For bhature, make dough with flour, yogurt, and water, roll into discs, and deep-fry until golden.",
                "Serve together."
            ]
        },
        "palak-paneer": {
            title: "Palak Paneer",
            ingredients: ["Paneer", "Spinach", "Onions", "Tomatoes", "Ginger", "Garlic", "Cream", "Spices"],
            instructions: [
                "Blanch spinach and blend into a puree.",
                "In a pan, sauté onions, ginger, and garlic, add tomatoes and cook until soft.",
                "Add spinach puree and spices, then stir in paneer cubes and cream.",
                "Cook until heated through.",
                "Serve with rice or bread."
            ]
        },
        "shahi-paneer": {
            title: "Shahi Paneer",
            ingredients: ["Paneer", "Onions", "Tomatoes", "Cashew nuts", "Cream", "Milk", "Ginger", "Garlic", "Spices"],
            instructions: [
                "Grind cashew nuts into a paste and set aside.",
                "In a pan, sauté onions, ginger, and garlic until golden.",
                "Add tomato puree and cook until oil separates.",
                "Add cashew nut paste and spices, cook for a few minutes.",
                "Add milk and cream, simmer until the sauce thickens.",
                "Add paneer cubes and cook until heated through.",
                "Serve with naan or rice."
            ]
        },
        "paneer-kofta": {
            title: "Paneer Kofta",
            ingredients: ["Paneer", "Potatoes", "Cornflour", "Cream", "Tomatoes", "Onions", "Ginger", "Garlic", "Spices"],
            instructions: [
                "Mash paneer and boiled potatoes, mix with cornflour and spices, and form into balls.",
                "Deep fry the balls until golden brown and set aside.",
                "In a pan, sauté onions, ginger, and garlic, then add tomato puree and cook until oil separates.",
                "Add cream and spices, simmer until the sauce thickens.",
                "Add the fried kofta balls to the sauce and cook for a few minutes.",
                "Serve with naan or rice."
            ]
        },
        "mix-veg": {
            title: "Mix Veg",
            ingredients: ["Mixed vegetables", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices", "Cream"],
            instructions: [
                "Chop all vegetables into bite-sized pieces.",
                "In a pan, heat oil, add onions, ginger, and garlic, and sauté until golden.",
                "Add chopped tomatoes and cook until soft.",
                "Add mixed vegetables and spices, and cook until vegetables are tender.",
                "Stir in cream and cook for a few more minutes.",
                "Serve with rice or bread."
            ]
        }
    };

    const recipe = recipes[dishName];
    displayRecipe(recipe);
}

function displayRecipe(recipe) {
    const recipeResult = document.getElementById('recipe-result');
    if (recipe) {
        recipeResult.innerHTML = `
            <h2>${recipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ul>
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ul>
        `;
        recipeResult.style.display = 'block';
    } else {
        recipeResult.innerHTML = `<p>Recipe not found. Please try another dish.</p>`;
        recipeResult.style.display = 'block';
    }
}

// Initialize dish names on page load
document.addEventListener('DOMContentLoaded', function() {
    populateDishNames(document.getElementById('dish-type').value);
});
