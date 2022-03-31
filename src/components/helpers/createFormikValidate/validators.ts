import { ValidatorArgs } from './types';
import { KeysOfValues } from '../../../types/types';

export const required = <
    Values extends object,
    K extends keyof Values,
    Other
> (
    args: ValidatorArgs<Values, K, Other>
) => {
    const { value } = args;
    const message = 'Поле не может быть пустым';

    if (value == null) {
        return message;
    }

    if (typeof value === 'string' && value.trim() === '') {
        return message;
    }
};

export const positive = <
    Values extends object,
    K extends KeysOfValues<Values, number | ''>,
    Other
> (
    args: ValidatorArgs<Values, K, Other>
) => {
    if (args.value <= 0) {
        return 'Значение должно быть больше 0';
    }
};

export const integer = <
    Values extends Record<K, unknown>,
    K extends KeysOfValues<Values, number | ''>,
    Other
> (
    args: ValidatorArgs<Values, K, Other>
) => {
    const value = args.value as number | '';

    if (value === '' || !Number.isInteger(value)) {
        return 'Значение должно быть целым числом';
    }
};
