import { mount } from '@cypress/react';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ErrorNotification } from './ErrorNotification';

const renderNotification = (
    message: string,
) => {
    const id = 0;
    mount(
        <SnackbarProvider>
            <ErrorNotification message={message} id={id} />
        </SnackbarProvider>
    );
};

const compareMessages = (message: string) => {
    cy.window().its('navigator.clipboard')
        .invoke('readText')
        .should('equal', message);
};

describe('Notification', () => {
    it('render error notification and check short copied message', () => {
        const message = 'some error message';
        renderNotification(message);
        cy.get('[data-testid="copy-message-button"]').click();
        compareMessages(message);
    });
    it('render error notification and check long copied message', () => {
        // eslint-disable-next-line max-len
        const message = 'some error message some error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error messagesome error message';
        renderNotification(message);
        cy.get('[data-testid="copy-message-button"]').click();
        compareMessages(message);
    });
});
