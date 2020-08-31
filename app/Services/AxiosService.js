// NOTE if multiple API's are used with different baseURL's then you can create multiple axios instances here and export each one separately

// @ts-ignore
export const apiCharacter = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 6000,
});

// @ts-ignore
export const apiPlanet = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 6000,
});
