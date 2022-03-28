
// export const API_PATH = "https://app-covidd.herokuapp.com/api/";
export const API_PATH = "https://app-server-app.herokuapp.com/api/";

export const TOKEN_NAME = "app-covid-token"

export const CONFIG = {
    headers: {
        "Authorization": localStorage.getItem(TOKEN_NAME)
    }
}
