import {
    Form, Formik, FormikProps
} from 'formik';
import React, { useRef } from 'react';
import {
    Button,
    FormControl, FormControlLabel, Radio, RadioGroup
} from '@material-ui/core';
import { createFormikValidate, required } from '../../../../helpers/createFormikValidate';
import { useWidgetStyles } from '../../../../common/useWidgetStyles';

enum Options {
    withVideo,
    withoutVideo,
    onlyDemonstration,
}

interface CreateConferenceFormValues {
    option: string;
}

const initialValues: CreateConferenceFormValues = {
    option: Options.withVideo.toString()
};

const validate = createFormikValidate({
    option: required
});

export const CreateConferenceForm = () => {
    const classes = useWidgetStyles();

    const onSubmit = (formValues: CreateConferenceFormValues) => {
        console.log(`create conference ${Options[Number(formValues.option)]}`);
    };
    const name = 'option';

    const formikRef = useRef<null | FormikProps<CreateConferenceFormValues>>(null);

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            innerForm={formikRef}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className={classes.form}>
                    <FormControl component="fieldset" className={classes.form}>
                        <RadioGroup
                            name={name}
                            value={values.option.toString()}
                            onChange={(event) => {
                                setFieldValue(name, event.currentTarget.value);
                            }}
                        >
                            <FormControlLabel
                                value={Options.withVideo.toString()}
                                control={<Radio color="primary" />}
                                label="С видео"
                            />
                            <FormControlLabel
                                value={Options.withoutVideo.toString()}
                                control={<Radio color="primary" />}
                                label="Без видео"
                            />
                            <FormControlLabel
                                value={Options.onlyDemonstration.toString()}
                                control={<Radio color="primary" />}
                                label="Только демонстрация"
                            />
                        </RadioGroup>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                        >
                            Создать
                        </Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    );
};
