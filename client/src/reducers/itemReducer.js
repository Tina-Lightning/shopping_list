import uuidv1 from 'uuid/v1'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
    items: [
        { id: uuidv1(), name: "Eggs" },
        { id: uuidv1(), name: "Milk" },
        { id: uuidv1(), name: "Steak" },
        { id: uuidv1(), name: "Candy" }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
}