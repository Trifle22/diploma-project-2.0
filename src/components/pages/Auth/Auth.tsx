import React from 'react';
import { Fade, makeStyles, Typography } from '@material-ui/core';
import { Formik, FormikErrors, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthForm } from './AuthForm';
import { userActions } from '../../../slices/user/userSlice';
import { UserRole } from '../../../types/types';

const useStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr'
    },
    welcome: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'transparent',
        background: '#666666',
        '-webkitBackgroundClip': 'text',
        '-mozBackgroundClip': 'text',
        backgroundClip: 'text',
        textShadow: '0px 3px 3px rgba(255,255,255,0.5)'
    },
    errorMessage: {
        justifySelf: 'center',
        color: 'red'
    }
}));

export interface AuthFormValues {
    user: string;
    password: string;
}

const initialValues: AuthFormValues = {
    user: '',
    password: ''
};

export const Auth = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (values: AuthFormValues) => {
        const user = {
            id: 0,
            name: values.user,
            roles: [UserRole.ROLE_BASE, UserRole.ROLE_TEACHER],
        };
        dispatch(userActions.userLogined(user));
        history.replace('/home');
    };

    return (
        <div className={classes.wrapper}>
            <Fade
                in
                timeout={5000}
            >
                <Typography
                    variant="h1"
                    component="div"
                    className={classes.welcome}
                >
                    МИИГАиК. Конференции
                </Typography>
            </Fade>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors: FormikErrors<AuthFormValues> = {};

                    (Object.keys(initialValues) as (keyof AuthFormValues)[]).forEach((key) => {
                        if (!values[key]) {
                            (errors)[key] = 'Поле не может быть пустым';
                        }
                    });

                    return errors;
                }}
                onSubmit={onSubmit}
            >
                {({ isValid, isValidating }: FormikProps<AuthFormValues>) => {
                    const isSubmitDisabled = !isValid || isValidating;

                    return <AuthForm isSubmitDisabled={isSubmitDisabled} />;
                }}
            </Formik>
            {/* <Typography className={classes.errorMessage}>{error}</Typography> */}
        </div>
    );
};
