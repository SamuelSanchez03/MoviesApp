import api from "./api"
import { CATEGORY_ENDPOINT } from "../utils/constants"

function getCategories() {
    return api.get(CATEGORY_ENDPOINT)
}

function getCategoryById(id) {
    return api.get(`${CATEGORY_ENDPOINT}/${id}`)
}

function getMoviesByCategory(id) {
    return api.get(`${CATEGORY_ENDPOINT}/${id}/movies`)
}

export default { getCategories, getCategoryById, getMoviesByCategory }