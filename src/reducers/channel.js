import * as actionTypes from "../actions/types";

const initialChannelState = {
    currentChannel: null,
    isPrivateChannel: false,
    userPosts: null
};

const channel_reducer = (state = initialChannelState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload.currentChannel
            };
        case actionTypes.SET_PRIVATE_CHANNEL:
            return {
                ...state,
                isPrivateChannel: action.payload.isPrivateChannel
            };
        case actionTypes.SET_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload.userPosts
            };
        default:
            return state;
    }
};

export default channel_reducer;
