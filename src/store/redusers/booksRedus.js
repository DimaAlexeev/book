const list = (localStorage["app_state"])?JSON.parse(localStorage.getItem("app_state")).books:{ books:[] }
const ADD_BOOKS = "ADD_BOOKS"
const DELETE_BOOKS = "DELETE_BOOKS"
const PUSH_BOOKS = "PUSH_BOOKS"
const EDIT_BOOKS = "EDIT_BOOKS"
export const booksReduse = (state = list,action)=>{
    switch(action.type){
        case ADD_BOOKS:
            return {books:[...action.state]}
        case EDIT_BOOKS:
            return {books:[...action.state]}
        case DELETE_BOOKS:
            return {...state,books:[...state.books.filter(item=>action.state!=item.id)]}
        case PUSH_BOOKS:
            return {...state,books:[...state.books,action.state]}
        default:
            return state
    }
}
export const addBooks = (state)=>({type:ADD_BOOKS,state})
export const editBooks = (state)=>({type:EDIT_BOOKS,state})
export const deleteBooks = (state)=>({type:DELETE_BOOKS,state})
export const pushBooks = (state)=>({type:PUSH_BOOKS,state})