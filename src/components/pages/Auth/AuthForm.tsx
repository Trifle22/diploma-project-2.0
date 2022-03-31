import { Form } from 'formik';
import React from 'react';
import {
    Button, makeStyles, Theme
} from '@material-ui/core';
import { OutlinedTextField } from '../../common/OutlinedTextField';
import { LinkToAccessInstruction } from './LinkToAccessInstruction';

const useStyles = makeStyles(({ spacing }: Theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        width: '250px'
    },
    submitButton: {
        marginTop: spacing(4)
    }
}));

interface Props {
    isSubmitDisabled: boolean;
}

export const AuthForm = ({ isSubmitDisabled }: Props) => {
    const classes = useStyles();

    return (
        <Form className={classes.form}>
            <OutlinedTextField
                name="user"
                label="Логин"
                helperText="Логин"
            />
            <OutlinedTextField
                name="password"
                label="Пароль"
                type="password"
                helperText="Пароль"
            />
            <Button
                color="primary"
                variant="contained"
                type="submit"
                className={classes.submitButton}
                disabled={isSubmitDisabled}
            >
                ВОЙТИ
            </Button>
            <LinkToAccessInstruction />
        </Form>
    );
};
