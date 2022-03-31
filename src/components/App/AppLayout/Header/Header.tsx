import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { TypographyLogo } from './TypographyLogo';
import { LinkToInstruction } from './LinkToInstruction';
import { UserInfo } from './UserInfo';
import { selectUser } from '../../../../slices/user/userSelectors';
import { User } from '../../../../types/types';

const useStyles = makeStyles(({ spacing, palette }) => ({
    toolbar: {
        justifyContent: 'space-between',
        gap: spacing(3),
        alignItems: 'center',
        backgroundColor: palette.grey[50]
    },
    rightElements: {
        display: 'flex',
        gap: spacing(2),
        alignItems: 'center',
    }
}));

export const Header = ({ className }: { className?: string; }) => {
    const classes = useStyles();

    const user = useSelector(selectUser) as User;

    return (
        <AppBar position="static" className={className}>
            <Toolbar className={classes.toolbar}>
                <TypographyLogo />
                <div className={classes.rightElements}>
                    <LinkToInstruction />
                    {user && <UserInfo user={user} />}
                </div>
            </Toolbar>
        </AppBar>
    );
};
