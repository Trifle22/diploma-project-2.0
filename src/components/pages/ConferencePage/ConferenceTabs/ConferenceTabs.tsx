import React, { useState } from 'react';
import {
    Tabs, Tab, makeStyles, useTheme
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import VideocamIcon from '@material-ui/icons/Videocam';
import GestureIcon from '@material-ui/icons/Gesture';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { TabPanel } from './TabPanel';
import { WebcamView } from '../Webcam';
import { ParticipantsList } from '../Webcam/ParticipantsList/ParticipantsList';
import { Conference } from '../types';
import { DrawingBoard } from '../DrawingBoard/DrawingBoard';
import { Documents } from '../Documents';
import { Chat } from '../Webcam/Chat';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        flexGrow: 1,
    },
    tabs: {
        marginBottom: spacing(1)
    },
    viewContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: spacing(1),
        maxHeight: '650px',
    }
}));

interface Props {
    conference: Conference;
}

export const ConferenceTabs = ({ conference }: Props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                className={classes.tabs}
            >
                <Tab icon={<VideocamIcon color="primary" />} label="Конференция" />
                <Tab icon={<GestureIcon color="primary" />} label="Доска" />
                <Tab icon={<AssignmentIcon color="primary" />} label="Документы" />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel index={0} value={value} dir={theme.direction}>
                    <div className={classes.viewContainer}>
                        <WebcamView />
                        <ParticipantsList participants={conference.participants} />
                        <Chat />
                    </div>
                </TabPanel>
                <TabPanel index={1} value={value} dir={theme.direction}>
                    <div>
                        <DrawingBoard />
                    </div>
                </TabPanel>
                <TabPanel index={2} value={value} dir={theme.direction}>
                    <div>
                        <Documents />
                    </div>
                </TabPanel>
            </SwipeableViews>
        </div>

    );
};
