import React from 'react';
import app from '../../../data/app.json';
import { appDataConfig } from '../../../configs/appDataConfig';

export const AppContext = React.createContext(appDataConfig(app, process.env.NEXT_PUBLIC_SITE_URL));
