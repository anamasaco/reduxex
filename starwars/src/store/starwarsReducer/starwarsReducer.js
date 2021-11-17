import { PREVIOUS_PAGE, NEXT_PAGE } from "./actionTypes";

export const initialState = {
    page: 1,
};

export const nextPage = () => ({
    type: NEXT_PAGE,
})

export const previousPage = () => ({
    type: PREVIOUS_PAGE,
})


export function starwarsReducer(state = initialState, action){
    switch(action.type){
        case NEXT_PAGE: 
            return {...state, page: state.page + 1 };
        case PREVIOUS_PAGE: 
            return {...state, page: state.page - 1 };
        default:
            return state;
    }
}