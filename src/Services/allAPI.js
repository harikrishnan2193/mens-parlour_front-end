import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

//reegister
export const registerAPI = async (users) => {
    return await commonAPI('POST', `${BASE_URL}/users/register`, users, "")
}

//login
export const loginAPI = async (users) => {
    return await commonAPI('POST', `${BASE_URL}/users/login`, users, "")
}