// NOTE if multiple API's are used with different baseURL's then you can create multiple axios instances here and export each one seperately


// @ts-ignore
export const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 6000
})