import CategoryService from "../services/CategoryService";

async function getCategories() {
    try {
        const res = await CategoryService.getCategories()
        return res.data
    } catch (error) {
        console.log(error)
        return { error: "Could not load categories." }
    }
} 

async function getCategoryById(id) {
    try {
        const res = await CategoryService.getCategoryById(id)
        return res.data
    } catch (error) {
        console.log(error)
        return { error: "Could not load category." }
    }
}

async function getMoviesByCategory(id) {
    try {
        const res = await CategoryService.getMoviesByCategory(id)
        return res.data
    } catch (error) {
        console.log(error)
        return { error: "Could not load movies." }
    }
}

export default { getCategories, getCategoryById, getMoviesByCategory }