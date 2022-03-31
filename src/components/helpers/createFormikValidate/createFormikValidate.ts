import { FormikErrors } from 'formik';
import { Validator } from './types';
import { Entries } from '../../../types/types';

type Rules<Values extends object, Other> = {
    [K in keyof Values]?: Validator<Values, K, Other> | Validator<Values, K, Other>[];
}

export const createFormikValidate = <Values extends object, Other = undefined>(
    rules: Rules<Values, Other>,
    other?: Other
) => (
    (values: Values) => {
        const errors: FormikErrors<Values> = {};

        (Object.entries(rules) as Entries<Rules<Values, Other>>).forEach(
            ([key, validators]) => {
                const validatorsArr = Array.isArray(validators) ? validators : [validators];

                for (let i = 0; i < validatorsArr.length; i++) {
                    const validator = validatorsArr[i];
                    const error = validator({
                        value: values[key], values, other
                    });

                    if (error) {
                        errors[key] = error;
                        break;
                    }
                }
            }
        );

        return errors;
    }
);
