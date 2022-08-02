import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE, API_KEY } from "./config.js"
import { AJAX } from "./helper.js";

export const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        resultsPerPage: RES_PER_PAGE,
        page: 1,
    },
    bookmarks: []
}

const createRecipeObject = function (data) {
    const { recipe } = data.data;
    return {
        cookingTime: recipe.cooking_time,
        id: recipe.id,
        image: recipe.image_url,
        ingredients: recipe.ingredients,
        servings: recipe.servings,
        sourceUrl: recipe.source_url,
        publisher: recipe.publisher,
        title: recipe.title,
        ...(recipe.key && { key: recipe.key })
    }
}

export const loadRecipe = async function (id) {
    try {
        const data = await AJAX(`${API_URL}${id}?key=${API_KEY}`);
        state.recipe = createRecipeObject(data);

        if (state.bookmarks.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true;
        else
            state.recipe.bookmarked = false;

    } catch (err) {
        throw err;
    }
}

export const uploadRecipe = async function (newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith("ingredient") && entry[1] !== "").map(ing => {
            const ingArr = ing[1].split(",").map(ing => ing.trim());
            if (ingArr.length !== 3) throw new Error("Wrong ingredient format! Please use specified format ;)");

            const [quantity, unit, description] = ingArr;
            return { quantity: quantity ? +quantity : null, unit, description };
        });

        const recipe = {
            title: newRecipe.title,
            cooking_time: +newRecipe.cookingTime,
            image_url: newRecipe.image,
            ingredients,
            servings: +newRecipe.servings,
            source_url: newRecipe.sourceUrl,
            publisher: newRecipe.publisher
        }
        const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
        console.log(state);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const results = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`)

        state.search.results = results.data.recipes.map((rec) => {
            return {
                id: rec.id,
                image: rec.image_url,
                publisher: rec.publisher,
                title: rec.title,
                ...(rec.key && { key: rec.key })

            }
        })
        state.search.page = 1;
    } catch (err) {
        throw err;
    }
}

const persistBookmarks = function () {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
}

export const getSearchResultPerPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = (page) * state.search.resultsPerPage;

    return state.search.results.slice(start, end);
}

export const updateServings = function (newServing) {
    state.recipe.ingredients.forEach(ing => ing.quantity = ing.quantity * newServing / state.recipe.servings);

    state.recipe.servings = newServing;
}

export const addBookmark = function (recipe) {
    state.bookmarks.push(recipe);
    state.recipe.bookmarked = true;
    persistBookmarks();
}

export const deleteBookmark = function (id) {
    const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);
    state.bookmarks.splice(index, 1);
    state.recipe.bookmarked = false;
    persistBookmarks();
}

export const loadBookmarks = function () {
    const bookmarks = localStorage.getItem("bookmarks");

    if (bookmarks) state.bookmarks = JSON.parse(bookmarks);
}
loadBookmarks();