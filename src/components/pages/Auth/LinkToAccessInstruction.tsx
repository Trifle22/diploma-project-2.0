import { Link, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { urlToUniversitySite } from '../../helpers/urlToUniversitySite';

const useStyles = makeStyles(({ spacing }: Theme) => ({
    instructionLink: {
        margin: 'auto',
        marginTop: spacing(2),
        whiteSpace: 'nowrap'
    }
}));

export const LinkToAccessInstruction = () => {
    const classes = useStyles();
    return (
        <Link
            className={classes.instructionLink}
            href={urlToUniversitySite}
            target="_blank"
            rel="noopener noreferrer"
            data-test-id="link-to-permissions"
        >
            Инструкция по получению доступа
        </Link>
    );
};
