export const URL = "https://identitytoolkit.googleapis.com/v1";
export const FIRESTORE_URL = "https://firestore.googleapis.com/v1";
export const PROJECT_ID = "mavidurakio-2327a";
export const DATABASE = "(default)";
export const API_KEY = process.env.REACT_APP_API_KEY;
export const POKEMON_ENDPOINT = `${FIRESTORE_URL}/projects/${PROJECT_ID}/databases/${DATABASE}/documents/pokemons?key=${API_KEY}`;

console.log("API_KEU", API_KEY);
