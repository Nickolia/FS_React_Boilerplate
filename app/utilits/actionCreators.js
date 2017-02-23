import * as ACTION_TYPES from '../constants/ActionTypes';

export const apiGetRequest = (params) => ({
    type: ACTION_TYPES.API_GET_REQUEST,
    params: [params.url, params.data],
});

export const apiPostRequest = (params) => ({
    type: ACTION_TYPES.API_POST_REQUEST,
    params: [params.url, params.data],
});

export const replacePage = (data) => ({
    type: ACTION_TYPES.REPLACE_PAGE,
    data,
});

export const replaceSidebar = (data) => ({
    type: ACTION_TYPES.REPLACE_SIDEBAR,
    data,
});

export const replaceUser = (data) => ({
    type: ACTION_TYPES.REPLACE_USER,
    data,
});
