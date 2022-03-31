import React from 'react';
import { Link, Tooltip } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import { urlToUniversitySite } from '../../../helpers/urlToUniversitySite';

export const LinkToInstruction = () => (
    <Tooltip title="Ссылка на инструкцию по работе с платформой">
        <Link target="_blank" href={urlToUniversitySite} rel="noopener">
            <HelpIcon style={{ fontSize: 40 }} />
        </Link>
    </Tooltip>
);
