
export const API_PATH = "http://localhost:81/api/";

export const TOKEN_NAME = "app-store-token"

export const CONFIG = {
    headers: {
        "Authorization": localStorage.getItem(TOKEN_NAME)
    }
}