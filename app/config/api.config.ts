export const API_URL = `${process.env.REACT_APP_SERVER_URL}/api`

export const getGenresUrl = (string:string) => `/genres${string}`
export const getMoviesUrl = (string:string) => `/movies${string}`
export const getRatingsUrl = (string:string) => `/ratings${string}`
export const getActorsUrl = (string:string) => `/genres${string}`
export const getAuthUrl = (string:string) => `/auth${string}`
export const getUsersUrl = (string:string) => `/users${string}`

