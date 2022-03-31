import { useSelector } from 'react-redux';
import {
    BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';
import React from 'react';
import { selectUser } from '../../slices/user/userSelectors';
import {
    Auth, ConferencePage, HomePage, PastConferencesPage, SettingsPage
} from '../pages';
import { AppLayout } from './AppLayout';

export const PagesRouter = () => {
    const user = useSelector(selectUser);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth">
                    <Auth />
                </Route>
                <Route>
                    {!user && <Redirect to="/auth" />}
                    <AppLayout>
                        <Switch>
                            <Route path="/" exact>
                                <HomePage />
                            </Route>
                            <Route path="/conference" exact>
                                <ConferencePage />
                            </Route>
                            <Route path="/pastConferences" exact>
                                <PastConferencesPage />
                            </Route>
                            <Route path="/settings" exact>
                                <SettingsPage />
                            </Route>
                        </Switch>
                    </AppLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
