import { paletasTypes } from "../types/paletasTypes";
const initialState = {
    paletas: []
};

export const paletasReducer = (state = initialState, action) => {

    switch (action.type) {

        case paletasTypes.PALETAS_FILL:

            return { ...state, paletas: [...action.payload]};

        default:
            return state;
    }
}