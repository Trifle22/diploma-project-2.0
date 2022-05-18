import { Button, makeStyles } from '@material-ui/core';
import { Form, Formik, FormikProps } from 'formik';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { OutlinedTextField } from '../../../common/OutlinedTextField';
import { createFormikValidate, required } from '../../../helpers/createFormikValidate';
import { userActions } from '../../../../slices/user/userSlice';

interface ChangeNameFormValues {
    newName: string;
}

const validate = createFormikValidate({
    newName: required
})

const initialValues = { newName: '' };

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
}))

export const ChangeNameForm = () => {
    const dispatch = useDispatch();

    const onSubmit = (formValues: ChangeNameFormValues) => {
        dispatch(userActions.changeUserName(formValues.newName))
    }
    const classes = useStyles();

    const formikRef = useRef<null | FormikProps<ChangeNameFormValues>>(null)

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            innerRef={formikRef}
            onSubmit={onSubmit}
        >
            <Form className={classes.form}>
                <OutlinedTextField<ChangeNameFormValues>
                    name="newName"
                    type="text"
                    label="Новое имя"
                    variant="standard"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                >
                    Сохранить
                </Button>
            </Form>
        </Formik>
    )
}
