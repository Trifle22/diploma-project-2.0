import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { AppNavBar } from './AppNavBar';
import { Footer } from './Footer';
import { Header } from './Header';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        height: '100vh',
        display: 'grid',
        gridTemplateAreas: `
                "header header"
                "drawer sourceContext"
                "footer footer"
            `,
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto 1fr auto'
    },
    header: {
        gridArea: 'header',
        backgroundColor: palette.grey[50]
    },
    footer: {
        gridArea: 'footer'
    },
    drawer: {
        gridArea: 'drawer'
    }
}));

export const AppLayout = ({ children }: { children: ReactNode; }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header className={classes.header} />
            <div className={classes.drawer}>
                <AppNavBar />
            </div>
            {children}
            <Footer className={classes.footer} />
        </div>
    );
};
