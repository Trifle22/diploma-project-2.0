import { ApiPath } from '../types/apiTypes';
import { RESTCall } from './RESTCall';

export const createRestApiCore = (apiPath = '') => {
    const createMethod = RESTCall(apiPath);
    console.log(apiPath);
    return ({
        get: createMethod('GET')
    });
};

const {
    pastConferences
} = ApiPath;

export const pastConferencesApiCore = createRestApiCore(pastConferences);
