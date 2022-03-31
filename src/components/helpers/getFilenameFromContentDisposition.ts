// contentDispositionHeader is something like "attachment; filename=file.sql"
export const getFilenameFromContentDisposition = (contentDispositionHeader: string | null) => {
    const match = contentDispositionHeader?.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);

    return match && match[0].split('=')[1];
};
