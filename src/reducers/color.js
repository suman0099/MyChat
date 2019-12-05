import * as actionTypes from "../actions/types";

const initialColorsState = {
    primaryColor: "#4c3c4c",
    secondaryColor: "#eee"
};

const colors_reducer = (state = initialColorsState, action) => {
    switch (action.type) {
        case actionTypes.SET_COLORS:
            return {
                primaryColor: action.payload.primaryColor,
                secondaryColor: action.payload.secondaryColor
            };
        default:
            return state;
    }
};

export default colors_reducer;
