import { Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { OutlinedTextField } from '../../../../common/OutlinedTextField';
import { createFormikValidate, required } from '../../../../helpers/createFormikValidate';
import { useWidgetStyles } from '../../../../common/useWidgetStyles';

interface GoToConferenceFormValues {
    conferenceId: number | '';
}

const initialValues: GoToConferenceFormValues = { conferenceId: '' };

const validate = createFormikValidate({
    conferenceId: required
});

export const GoToConferenceForm = () => {
    const classes = useWidgetStyles();

    const onSubmit = (formValues: GoToConferenceFormValues) => {
        console.log(`go to conference ${formValues.conferenceId}`);
    };

    const formikRef = useRef<null | FormikProps<GoToConferenceFormValues>>(null);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            innerRef={formikRef}
        >
            <Form data-test-id="go-to-conference-form" className={classes.form}>
                <OutlinedTextField<GoToConferenceFormValues>
                    name="conferenceId"
                    type="number"
                    label="ID конференции"
                    variant="standard"
                    inputProps={{
                        min: 0
                    }}
                    InputProps={{
                        'data-test-id': 'go-to-conference-id'
                    }}
                    className={classes.formFields}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    Перейти
                </Button>
            </Form>
        </Formik>
    );
};
