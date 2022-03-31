interface ConstructorParams {
    message?: string;
    code: number;
}

export class RequestError extends Error {
    public code: number;

    constructor({ message, code }: ConstructorParams) {
        super(message);

        this.code = code;
    }
}
