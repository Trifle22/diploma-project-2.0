import React, { useCallback } from 'react';
import {
    IconButton,
    makeStyles,
    Theme,
    Paper
} from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { ArrowUpward, Home, ViewList } from '@material-ui/icons';
import VideocamIcon from '@material-ui/icons/Videocam';
import SettingsIcon from '@material-ui/icons/Settings';

export const useNavBarStyles = makeStyles(({ spacing }: Theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: spacing(1),
        width: spacing(7),
        marginRight: spacing(1),
        height: `calc(100% + ${spacing(2)}px)`,
        '& .selected': {
            background: ' #e3e5f5',
        }
    },
    iconButton: {
        alignSelf: 'flex-end',
        marginBottom: spacing(1),
        borderRadius: '50%'
    }
}));

export const AppNavBar = () => {
    const classes = useNavBarStyles();
    const history = useHistory();

    const onClickBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <Paper
            className={classes.wrapper}
            square
        >
            <IconButton
                className={classes.iconButton}
                title="Назад"
                onClick={onClickBack}
            >
                <ArrowUpward />
            </IconButton>
            <NavLink
                to="/"
                exact
                className={classes.iconButton}
                activeClassName="selected"
                title="Главная"
                data-test-id="home-nav-link"
            >
                <IconButton>
                    <Home />
                </IconButton>
            </NavLink>
            <NavLink
                to="/conference"
                className={classes.iconButton}
                activeClassName="selected"
                title="Конференция"
                data-test-id="conference-nav-link"
            >
                <IconButton>
                    <VideocamIcon />
                </IconButton>
            </NavLink>
            <NavLink
                to="/pastConferences"
                className={classes.iconButton}
                activeClassName="selected"
                title="Прошлые конференции"
                data-test-id="pastConferences-nav-link"
            >
                <IconButton>
                    <ViewList />
                </IconButton>
            </NavLink>
            <NavLink
                to="/settings"
                className={classes.iconButton}
                activeClassName="selected"
                title="Настройки"
                data-test-id="settings-nav-link"
            >
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </NavLink>
        </Paper>
    );
};
