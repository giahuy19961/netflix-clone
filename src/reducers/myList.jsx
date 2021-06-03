

const initialState = {
      list:JSON.parse(localStorage.getItem("myList")) || [],
}

const myListReducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_MY_LIST" :{
            const newList = [...state.list];
            const index = newList.findIndex(item => item.id === action.payload.id)
            if(index === -1){
                newList.push(action.payload);
                localStorage.setItem("myList",JSON.stringify(newList))
                return {
                    ...state,
                    list:newList,
                } 
            }else{
                return {...state}    
            }
        }
        case "REMOVE_MY_LIST":{
            const newList = [...state.list];
            let newUpdate = newList.filter(item => item.id !== action.payload.id)
            localStorage.setItem("myList",JSON.stringify(newUpdate))
            return{
                ...state,
                list:newUpdate,
            }
        }
        default:
            return state;
    }
}
export default myListReducer