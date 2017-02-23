import * as ACTION_TYPES from '../constants/ActionTypes';
const defaultState = {
    links: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.REPLACE_SIDEBAR:
            return action.data;
        case ACTION_TYPES.UPDATE_SIDEBAR:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};
