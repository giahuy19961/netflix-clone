export const actAddMyList = (movie)=>{
      return {
          type:"ADD_MY_LIST",
          payload:movie,
      }
}
export const actRemoveMyList = (movie) =>{
    return {
        type :"REMOVE_MY_LIST",
        payload:movie,
    }
}