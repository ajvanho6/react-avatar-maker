import request from 'request';
import Promise from 'bluebird';

const baseRequest = request.defaults({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    json: true,
});

/**
 * Returns promise for base request
 *
 * @param {Object} requestParams
 */
export const getPromise = (requestParams) => {
    return new Promise((resolve, reject) => {
        baseRequest(
            requestParams,
            (error, response, body) => {
                if (error || response.statusCode >= 400) {
                    console.log(error, response, body);
                    return reject(new Error({error, response, body}));
                }
                return resolve({error, response, body});
            }
        );
    });
};
