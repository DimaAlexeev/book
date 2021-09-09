const list = (localStorage["app_state"])?JSON.parse(localStorage.getItem("app_state")).author:{ author:[] }
const ADD_AUTHOR = "ADD_AUTHOR"
const DELETE_AUTHOR = "DELETE_AUTHOR"
const PUSH_AUTHOR = "PUSH_AUTHOR"
const EDIT_AUTHOR = "EDIT_AUTHOR"
export const authorReduse = (state = list,action)=>{
    switch(action.type){
        case ADD_AUTHOR:
            return {author:[...action.state]}
        case EDIT_AUTHOR:
            return {author:[...action.state]}
        case DELETE_AUTHOR:
            return {...state,author:[...state.author.filter(item=>action.state!==item.id)]}
        case PUSH_AUTHOR:
            return {...state,author:[...state.author,action.state]}
        default:
            return state
    }
}
export const addAuthor = (state)=>({type:ADD_AUTHOR,state})
export const editAuthor = (state)=>({type:EDIT_AUTHOR,state})
export const deleteAuthor = (state)=>({type:DELETE_AUTHOR,state})
export const pushAuthor = (state)=>({type:PUSH_AUTHOR,state})