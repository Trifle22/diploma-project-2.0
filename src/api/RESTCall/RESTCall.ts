import { downloadBlobAsFile } from './downloadBlobAsFile';
import { getPrefix } from './getPrefix';
import { RequestError } from './RequestError';
import { showError } from '../../components/helpers/showError';
import { store } from '../../store';
import { getFilenameFromContentDisposition } from '../../components/helpers/getFilenameFromContentDisposition';
import { userActions } from '../../slices/user/userSlice';

const postHeaders = new Headers({ 'Content-Type': 'application/json' });

type RESTMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const RESTCall = (apiPath = '') =>
    (method: RESTMethod) =>
        async <T = undefined>(route: string, options?: RequestInit): Promise<T> => {
            const requestInit: RequestInit = {
                method,
                credentials: 'include'
            };

            if (
                ['POST', 'PUT', 'DELETE'].includes(method)
                && !options?.headers
            ) {
                requestInit.headers = postHeaders;
            }

            const response = await fetch(`/${apiPath ? `${apiPath}/` : ''}${route}`, {
                ...requestInit,
                ...options
            });

            const filename = getFilenameFromContentDisposition(response.headers.get('Content-Disposition'));

            if (filename) {
                const blob = await response.blob();

                downloadBlobAsFile(blob, filename);

                return {} as T;
            }

            const isJSON = response.headers
                .get('Content-Type')?.toLowerCase()
                .includes('application/json');

            let jsonBody;
            try {
                if (isJSON) {
                    jsonBody = await response.json();
                }
            } catch (e: any) {
                showError(e);
            }

            if (!response.ok) {
                if (response.status === 401) {
                    store.dispatch(userActions.userReset());
                }

                let errorMessage;
                if (jsonBody) {
                    const { status, error, message } = jsonBody;
                    errorMessage = `${getPrefix(apiPath, status)} ${error || ''}${message ? ': ' : ''}${message || ''}`;
                } else {
                    const { status, statusText } = response;
                    errorMessage = `${getPrefix(apiPath, status)} ${statusText}`;
                }

                throw new RequestError({
                    message: errorMessage,
                    code: response.status
                });
            }

            return jsonBody;
        };
