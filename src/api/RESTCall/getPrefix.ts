export const getPrefix = (apiPath: string, code: number) => `${apiPath ? `<${apiPath}>` : ''} ${code ? `[${code}]` : ''}`;
