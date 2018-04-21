import * as Request from './Request';
import apiEndpoints from './apiEndpoints';

/**
 * Dummy API call
 *
 * @param {Object} payload
 * @return {*}
 */
export const dummyCall = (payload = {}) => {
    // console.log('here');
    return Request.getPromise({
        url: apiEndpoints.DUMMY_CALL,
        method: 'GET',
        data: payload,
    }).then((error, response, body) => {
        return body;
    });
};

