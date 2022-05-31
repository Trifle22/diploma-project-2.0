import { Button, InputAdornment, makeStyles } from '@material-ui/core';
import {
    Form, Formik, FormikProps
} from 'formik';
import React, { useRef } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';
import { OutlinedTextField } from '../../../../common/OutlinedTextField';
import { createFormikValidate, required } from '../../../../helpers/createFormikValidate';
import { chatActions } from '../../../../../slices/chat';
import { UserRole } from '../../../../../types/types';
import { MessageType } from '../../../../../slices/chat/types';

interface FormValues {
    message: string;
}

const initialValues: FormValues = {
    message: ''
}

const validate = createFormikValidate({
    message: required
})

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '10%'
    },
    input: {
        width: '100%',
    }
}))

export const ChatForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSubmit = (formValues: FormValues) => {
        const message = {
            text: formValues.message,
            type: MessageType.MY_MESSAGE,
            timestamp: Date.now(),
            author: {
                id: 0,
                name: 'Александр Хромченков',
                roles: [UserRole.ROLE_BASE],
            }
        }
        dispatch(chatActions.addMessage(message))
    }

    const formikRef = useRef<null | FormikProps<FormValues>>(null)
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            innerRef={formikRef}
        >
            <Form className={classes.root}>
                <OutlinedTextField<FormValues>
                    className={classes.input}
                    name="message"
                    type="text"
                    disabled={false}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button type="submit">
                                    <SendIcon color="primary" />
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Form>
        </Formik>
    )
}
