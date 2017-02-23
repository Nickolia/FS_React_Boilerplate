import * as ACTION_TYPES from '../constants/ActionTypes';
const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.REPLACE_PAGE:
            return action.data;
        case ACTION_TYPES.UPDATE_PAGE:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};
