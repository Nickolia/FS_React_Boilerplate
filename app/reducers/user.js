import * as ACTION_TYPES from '../constants/ActionTypes';
const defaultState = {
    id: 0,
    name: '',
    photo: '',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.REPLACE_USER:
            return action.data;
        case ACTION_TYPES.UPDATE_USER:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};
