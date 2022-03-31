import { ValidatedFormikValues } from '../../../types/types';

export interface ValidatorArgs<
    Values extends object,
    K extends keyof Values,
    Other = undefined
> {
    value: ValidatedFormikValues<Values>[K];
    values: ValidatedFormikValues<Values>;
    other: Other;
}

export interface Validator<
    Values extends object,
    K extends keyof Values,
    Other
> {
    (args: ValidatorArgs<Values, K, Other>): string | undefined;
}
