import { Field, FieldAttributes } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';

type Props<T> = Omit<FieldAttributes<any>, 'name'> & {
    name: keyof T;
};

// eslint-disable-next-line react/function-component-definition
export function OutlinedTextField<T>(props: Props<T>) {
    return (
        <Field
            component={TextField}
            type="text"
            variant="outlined"
            margin="dense"
            helperText=" "
            {...props}
        />
    );
}
