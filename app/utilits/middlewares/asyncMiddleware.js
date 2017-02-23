/**
 * Example:
 *
 * import { createStore, applyMiddleware } from 'redux';
 * import asyncMiddleware from 'redux-async-api';
 *
 * // Specify any function you want, that returns promise.
 * // It allows you to use single function for all api requests.
 * const callApi = (methodName, methodParams) => {
 *     return fetch('http://my-awesome-api.com', {
 *         method: 'POST',
 *         body: JSON.stringify({
 *             ...methodParams,
 *             accessToken: 'xxx', // <- this is a benefit!
 *         }),
 *     });
 * };
 *
 * // Create store with middleware.
 * const store = createStore(rootReducer, storeData, applyMiddleware(
 *     asyncMiddleware(
 *         callApi,
 *         'apiRequest', // -> {type: 'apiRequest', params: <T>}
 *         'apiSuccess', // -> {type: 'apiSuccess', params: <T>, result: ...}
 *         'apiError'    // -> {type: 'apiError',   params: <T>, error: ...}
 *     )
 * ));
 *
 * // This action executes `callApi('getProfile', {id: 1})`.
 * store.dispatch({
 *     type: 'apiRequest',
 *     params: ['getProfile', {id: 1}],
 * }).then(result => { // you can also handle dispatch result.
 *     dispatch({
 *         type: 'showProfile',
 *         name: result.firstName,
 *         ...
 *     });
 * });
 *
 * // And now you can handle any of api results in one place.
 * // This is another benefit!
 * const rootReducer = (state, action) => {
 *     switch (action.type) {
 *         case 'apiError':
 *             return {
 *                 ...state,
 *                 errorMessage: 'There is api error: ' + action.error,
 *             };
 *     }
 *
 *     return state;
 * }
 *
 * @param {Function} callApi
 * @param requestType
 * @param successType
 * @param errorType
 * @returns {Function}
 */
export default (callApi, requestType, successType, errorType) => {
    return ({ dispatch }) => next => action => {
        if (action.type === requestType) {
            return callApi(...action.params).then(result => {
                dispatch({
                    type: successType,
                    params: action.params,
                    result: result,
                });

                return result;
            }).catch(error => {
                dispatch({
                    type: errorType,
                    params: action.params,
                    error: error,
                });

                throw error;
            });
        }

        return next(action);
    };
};
