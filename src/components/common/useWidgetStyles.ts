import { makeStyles } from '@material-ui/core';

export const useWidgetStyles = makeStyles(({ spacing }) => ({
    button: {
        marginTop: 'auto',
        maxWidth: '40%',
        paddingInline: spacing(1),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(2),
        maxHeight: '100%',
    },
    formFields: {
        maxWidth: '70%'
    }
}));
